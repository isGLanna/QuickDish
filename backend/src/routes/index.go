package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(r *gin.Engine) {
	HealthRoutes(r)
	RegisterUser(r)

	r.NoRoute(func(c *gin.Context) {
		// Implementar um redirect para página de erro 404 quando implementado
		c.JSON(http.StatusNotFound, gin.H{"error": "Endpoint not found."})
	})
}

func HealthRoutes(api *gin.Engine) {
	api.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "pong"})
	})
}
