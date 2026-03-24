package models

type Enterprise struct {
	Id      uint      `gorm:"primaryKey autoIncrement" json:"id"`
	Name    string    `gorm:"not null; size:30" json:"name"`
	CNPJ    string    `gorm:"not null; size:18; unique" json:"cnpj"`
	Address []Address `gorm:"foreignKey:EnterpriseId" json:"address"`
}
