package main

import (
	"backend/src/db"
	"backend/src/middlewares"
	"backend/src/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	//db.InitDatabase()
	conn := db.InitRedis()
	r := gin.Default()

	r.Use(middlewares.ConfigCors("*"))
	r.Use(middlewares.RateLimiter(conn))
	r.Use(middlewares.Auth())

	routes.RegisterRoutes(r)

	r.Run(":4000")
}
