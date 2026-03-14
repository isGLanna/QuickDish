package middlewares

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func ConfigCors(allowedOrigin string) gin.HandlerFunc {
	return cors.New(cors.Config{
		AllowOrigins:     []string{allowedOrigin},
		AllowMethods:     []string{"GET", "PUT", "POST", "DELETE"},
		AllowHeaders:     []string{"Origin", "Authorization", "Content-Type"},
		ExposeHeaders:    []string{"Content-Lenght"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	})
}
