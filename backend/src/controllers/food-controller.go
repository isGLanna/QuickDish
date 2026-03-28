package controllers

import (
	"backend/src/services"
	"backend/src/validators"

	"strconv"

	"github.com/gin-gonic/gin"
)

type FoodController struct {
	service *services.FoodService
}

func NewFoodController() *FoodController {
	return &FoodController{service: services.NewFoodService()}
}

func (s FoodController) CreateFood(c *gin.Context) {
	newFood := validators.FoodSchema{}

	if err := c.ShouldBindJSON(&newFood); err != nil {
		c.JSON(400, gin.H{"Error": err.Error()})
		return
	}

	err := s.service.CreateFood(&newFood)

	if err != nil {
		c.JSON(500, gin.H{"Error": "Falha ao criar prato"})
		return
	}

	c.JSON(201, gin.H{"message": "Food created successfully"})
}

func (s FoodController) UpdateFood(c *gin.Context) {
	foodIdString := c.Param("id")
	companyId, exists := c.Get("company_id")

	if !exists {
		c.JSON(400, gin.H{"Error": "Company ID not found in context"})
		return
	}

	foodId, _ := strconv.Atoi(foodIdString)

	food := validators.UpdateFoodSchema{}

	if err := c.ShouldBindJSON(&food); err != nil {
		c.JSON(400, gin.H{"Error": err.Error()})
		return
	}

	err := s.service.UpdateFood(uint(foodId), companyId.(uint), &food)
	if err != nil {
		c.JSON(500, gin.H{"Error": "Falha ao atualizar prato"})
		return
	}

	c.JSON(200, gin.H{"message": "Food updated successfully"})
}

func (s FoodController) GetPopularFoods(c *gin.Context) {
	foods, err := s.service.GetPopularFoods()

	if err != nil {
		c.JSON(500, gin.H{"error": "Falha ao consultar pratos populares"})
		return
	}

	c.JSON(200, foods)
}

func (s FoodController) GetFoodSuggestions(c *gin.Context) {
	clientId, queryCount := c.Query("id"), c.Query("query_count")

	clientIdInt, _ := strconv.Atoi(clientId)
	queryCountInt, _ := strconv.Atoi(queryCount)

	foods, err := s.service.GetFoodSuggestions(uint(clientIdInt), queryCountInt)

	if err != nil {
		c.JSON(500, gin.H{"error": "Falha ao consultar sugestões de pratos"})
		return
	}

	c.JSON(200, foods)
}

func (s FoodController) GetFoodsByEnterprise(c *gin.Context) {

}

func (s FoodController) DeleteFood(c *gin.Context) {

}

func (s FoodController) AvailableFood(c *gin.Context) {

}

func (s FoodController) UnavailableFood(c *gin.Context) {

}

func (s FoodController) GetFoodDetails(c *gin.Context) {

}

func (s FoodController) SearchFoods(c *gin.Context) {

}

func (s FoodController) GetFoodsByCategory(c *gin.Context) {

}
