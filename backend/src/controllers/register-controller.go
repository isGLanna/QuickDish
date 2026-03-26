package controllers

import (
	"backend/src/services"

	"github.com/gin-gonic/gin"
)

type RegisterController struct {
	service *services.RegisterService
}

func NewRegisterController() *RegisterController {
	return &RegisterController{service: services.NewRegisterService()}
}

func (c *RegisterController) RegisterUser(ctx *gin.Context) {
	// Implementar lógica de registro de usuário
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
