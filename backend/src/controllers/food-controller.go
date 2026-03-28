package controllers

import (
	"backend/src/services"

	"github.com/gin-gonic/gin"
)

type FoodController struct {
	service *services.FoodService
}

func NewFoodController() *FoodController {
	return &FoodController{service: services.NewFoodService()}
}

func (s FoodController) GetPopularFoods(c *gin.Context) {

}

func (s FoodController) GetFoodSuggestions(c *gin.Context) {

}

func (s FoodController) GetFoodsByEnterprise(c *gin.Context) {

}
