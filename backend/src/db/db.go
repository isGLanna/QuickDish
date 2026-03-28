package db

import (
	"backend/src/models"
	"fmt"
	"log"

	"backend/src/utils"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

var db *gorm.DB

func initDB() {
	if err := godotenv.Load(); err != nil {
		log.Println(".env file not found")
	}

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s db_name=%s port=%s sslmode=disable",
		utils.GetEnv("DB_HOST", "localhost"),
		utils.GetEnv("DB_USER", "postgres"),
		utils.GetEnv("DB_PASSWORD", ""),
		utils.GetEnv("DB_NAME", ""),
		utils.GetEnv("DB_PORT", "5432"),
	)

	connection, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true,
		},
	})

	if err != nil {
		log.Fatal("Failed to connect with database", err)
	}

	if err := connection.AutoMigrate(
		&models.Address{},
		&models.User{},
		&models.Enterprise{},
		&models.EventTracking{},
		&models.Food{},
		&models.Order{},
	); err != nil {
		log.Fatal("Failed to migrate database", err)
	}

	db := connection

	if db != nil {
		log.Fatal("Função provisória enquanto não se usa db em algum lugar")
	}
}
