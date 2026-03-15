package main

import (
	"backend/src/middlewares"
	"backend/src/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	//db.InitDatabase()
	r := gin.Default()

	r.Use(middlewares.ConfigCors("*"))

	routes.RegisterRoutes(r)

	r.Run(":4000")
}
