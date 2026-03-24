package database

import (
	"gorm.io/gorm"
)

type Database struct {
	DB *gorm.DB
}

func (database *Database) Migrate(models ...interface{}) error {
	return database.DB.AutoMigrate(models...)
}
