package routes

import (
	"backend/src/controllers"

	"github.com/gin-gonic/gin"
)

func RegisterUser(api *gin.Engine) {
	controller := controllers.NewRegisterController()

	api.POST("/register", controller.RegisterUser)
	api.POST("/register/restaurant", controller.RegisterRestaurant)
	api.POST("/register/delivery", controller.RegisterDeliveryPerson)

	api.POST("/login", controller.LoginUser)
	api.POST("/login/restaurant", controller.LoginRestaurant)
	api.POST("/login/delivery", controller.LoginDeliveryPerson)
}
