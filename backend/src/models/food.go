package models

type Food struct {
	Id          uint    `gorm:"primaryKey autoIncrement" json:"id"`
	CompanyId   uint    `gorm:"not null" json:"company_id"`
	Name        string  `gorm:"not null; varchar(50)" json:"name"`
	Description string  `gorm:"varchar(255)" json:"description"`
	Price       int     `gorm:"not null integer" json:"price"`
	Company     Company `gorm:"foreignKey:CompanyId" json:"company"`
}
