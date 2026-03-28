package middlewares

import (
	"backend/src/providers"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Verificar se o jwt contém a função do usuário e se ela é igual à função exigida
func RolePermission(requiredRole string) gin.HandlerFunc {
	return func(c *gin.Context) {
		jwt := providers.NewJWTProvider()

		tokenString := c.GetHeader("Authorization")[len("Bearer "):]

		claims, err := jwt.Verify(tokenString)

		if err != nil {
			c.AbortWithStatusJSON(http.StatusMethodNotAllowed, gin.H{"error": "Acesso negado"})
			return
		}

		if claims.Role != requiredRole && claims.Role != "*" {
			c.AbortWithStatusJSON(http.StatusForbidden, gin.H{"error": "Usuário sem permissão."})
			return
		}

		c.Set("id", claims.Id)
		c.Set("company_id", claims.EnterpriseId)
		c.Set("role", claims.Role)

		c.Next()
	}
}
