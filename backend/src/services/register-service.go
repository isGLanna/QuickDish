package services

import (
	"gorm.io/gorm"
)

type RegisterService struct {
	db *gorm.DB
}

func NewRegisterService() *RegisterService {
	return &RegisterService{db: &gorm.DB{}}
}
