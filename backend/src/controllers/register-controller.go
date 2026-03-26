package controllers

import (
	"backend/src/services"
	"backend/src/validators"

	"github.com/gin-gonic/gin"
)

type RegisterController struct {
	service *services.RegisterService
}

func NewRegisterController() *RegisterController {
	return &RegisterController{service: services.NewRegisterService()}
}

func (c *RegisterController) RegisterUser(ctx *gin.Context) {
	userData := struct {
		validators.RegisterUserSchema
	}{}

	if err := ctx.ShouldBindJSON(&userData); err != nil {
		ctx.JSON(400, gin.H{"Error": err.Error()})
		return
	}
}

func (c *RegisterController) RegisterRestaurant(ctx *gin.Context) {
	// Implementar lógica de registro de restaurante
}

func (c *RegisterController) RegisterDeliveryPerson(ctx *gin.Context) {
	// Implementar lógica de registro de entregador
}

func (c *RegisterController) LoginUser(ctx *gin.Context) {
	// Implementar lógica de login de usuário
}

func (c *RegisterController) LoginRestaurant(ctx *gin.Context) {
	// Implementar lógica de login de restaurante
}

func (c *RegisterController) LoginDeliveryPerson(ctx *gin.Context) {
	// Implementar lógica de login de entregador
}
