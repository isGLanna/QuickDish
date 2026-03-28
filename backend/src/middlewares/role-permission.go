package middlewares

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Verificar se o jwt contém a função do usuário e se ela é igual à função exigida
func RolePermission(requiredRole string) gin.HandlerFunc {
	return func(c *gin.Context) {
		role, exists := c.Get("role")

		if !exists || role != requiredRole {
			c.AbortWithStatusJSON(http.StatusForbidden, gin.H{"error": "Usuário sem permissão."})
			return
		}

		userId, _ := c.Get("userId")

		c.Next()
	}
}
