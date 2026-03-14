package main

import (
	"backend/src/middlewares"

	"github.com/gin-gonic/gin"
)

func main() {
	//db.InitDatabase()
	r := gin.Default()

	r.Use(middlewares.ConfigCors("*"))

	r.Run(":4000")
}
