package models

type Order struct {
	Id          uint    `gorm:"primaryKey autoIncrement" json:"id"`
	FoodId      uint    `gorm:"not null" json:"food_id"`
	ClientId    uint    `gorm:"not null" json:"client_id"`
	AdressId    uint    `gorm:"not null" json:"adress_id"`
	TotalPrice  int     `gorm:"not null integer" json:"total_price"`
	Description string  `gorm:"varchar(255)" json:"description"`
	Destination string  `gorm:"not null; varchar(255)" json:"destination"`
	Status      string  `gorm:"not null; varchar(20)" json:"status"`
	CreatedAt   int64   `gorm:"autoCreateTime" json:"created_at"`
	Food        Food    `gorm:"foreignKey:FoodId" json:"food"`
	Client      Client  `gorm:"foreignKey: ClientId" json:"client"`
	Address     Address `gorm:"foreignKey: AdressId" json:"adress"`
}
