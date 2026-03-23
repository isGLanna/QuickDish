package models

type Food struct {
	Id           uint       `gorm:"primaryKey autoIncrement" json:"id"`
	EnterpriseId uint       `gorm:"not null" json:"enterprise_id"`
	Name         string     `gorm:"not null; varchar(50)" json:"name"`
	Description  string     `gorm:"varchar(255)" json:"description"`
	Price        int        `gorm:"not null integer" json:"price"`
	Enterprise   Enterprise `gorm:"foreignKey:EnterpriseId" json:"enterprise"`
}
