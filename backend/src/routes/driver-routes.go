package routes

import (
	"github.com/gin-gonic/gin"
)

func DriverRoutes(public *gin.Engine, group *gin.RouterGroup) {
	/* controller := controllers.NewDeliveryController()

	// alterar status de busca
	group.POST("/me/status")

	/* endpoints:
	- solicitar prioridade nas proximidades do endereço
	- enviar código de verificação de pedido do cliente
	- aceitar entrega
	- recusar entrega
	- enviar localização atual
	- confirmar recebimento pelo cliente
	- negar recebimento pelo cliente
	- histórico de entregas
	*/
}
