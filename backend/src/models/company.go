package models

type Company struct {
	Id       uint      `gorm:"primaryKey autoIncrement" json:"id"`
	Name     string    `gorm:"not null; size:30" json:"name"`
	Email    string    `gorm:"not null; size: 50; unique" json:"email"`
	Password string    `gorm:"not null; size:255" json:"password"`
	CNPJ     string    `gorm:"not null; size:18; unique" json:"cnpj"`
	Address  []Address `gorm:"foreignKey:EnterpriseId" json:"address"`
	LogoUrl  string    `gorm:"size:255" json:"logo_url"`
}
