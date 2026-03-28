package routes

import (
	"backend/src/middlewares"
	"net/http"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(r *gin.Engine) {
	HealthRoutes(r)
	RegisterUser(r)

	//userGroup := r.Group("/user")
	//deliveryGroup := r.Group("/delivery")

	{
		companyGroup := r.Group("/restaurant")
		companyGroup.Use(middlewares.RolePermission("restaurant"))
		FoodRoutes(r, companyGroup)
	}

	{
		deliveryGroup := r.Group("/delivery")
		deliveryGroup.Use(middlewares.RolePermission("delivery_person"))
		DriverRoutes(r, deliveryGroup)
	}

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
