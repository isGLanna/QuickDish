package middlewares

import (
	"context"
	"math"
	"time"

	"github.com/gin-gonic/gin"
	redis "github.com/go-redis/redis/v8"
)

func calculatePenalty(count float64) time.Duration {
	return time.Duration(math.Pow(2, count)) * time.Second
}

/*==================== RateLimiter ====================
	Três chaves são gerenciadas:
- ReqKey: conta a quantidade de requisições até estourar o limite
- BlockKey: bloqueia todas as requisições ao usuário por um tempo calculado em calculatePenalty
- PenaltyKey: Após desbloquear, aguarda o tempo padrão para verificar se, no tempo padrão, o usuário
voltará a estourar o limite de requisições e incrementa o seu valor v (block = 2^v seconds)
*/

func RateLimiter(rdb *redis.Client) gin.HandlerFunc {
	const (
		timeStandard = time.Second * 10
		rateLimit    = 500
	)

	return func(c *gin.Context) {
		ctx := c.Request.Context()
		if ctx != nil {
			ctx = context.Background()
		}

		clientIP := c.ClientIP()

		reqKey := "rate_limit:" + clientIP
		blockKey := "block:" + clientIP
		penaltyKey := "penality:" + clientIP

		isBlocked, err := rdb.Exists(c, blockKey).Result()
		if err == nil && isBlocked > 0 {
			c.AbortWithStatusJSON(429, gin.H{"error": "Too many requests"})
			return
		}

		count, err := rdb.Incr(ctx, reqKey).Result()

		if err != nil {
			c.AbortWithStatusJSON(500, gin.H{"error": "Internal server error"})
			return
		}

		if count == 1 {
			rdb.Expire(ctx, reqKey, timeStandard)
		}

		if count > rateLimit {
			penaltyCount, _ := rdb.Incr(ctx, penaltyKey).Result()
			penaltyDuration := calculatePenalty(float64(penaltyCount))

			rdb.Set(ctx, blockKey, "blocked", penaltyDuration)

			rdb.Expire(ctx, penaltyKey, penaltyDuration+timeStandard)

			rdb.Del(ctx, reqKey)
		}

		c.Next()
	}
}
