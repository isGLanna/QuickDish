package routes

import (
	"backend/src/controllers"

	"github.com/gin-gonic/gin"
)

func FoodRoutes(public *gin.Engine, group *gin.RouterGroup) {
	controller := controllers.NewFoodController()

	public.GET("/foods/popular", controller.GetPopularFoods)
	public.GET("/foods/suggestions", controller.GetFoodSuggestions)
	public.GET("/foods/enterprise/:id", controller.GetFoodsByEnterprise)

	{
		group.POST("/foods", controller.CreateFood)
		group.PUT("/foods/:id", controller.UpdateFood)
		group.DELETE("/foods/:id", controller.DeleteFood)
	}
}
