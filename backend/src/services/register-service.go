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

type AuthValidator interface {
	ValidateRegister() error
	ValidateLogin() error
}
