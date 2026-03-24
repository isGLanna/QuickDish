package models

type Review struct {
	Id       uint   `gorm:"primaryKey autoIncrement" json:"id"`
	ClientId uint   `gorm:"not null" json:"client_id"`
	FoodId   uint   `gorm:"not null" json:"food_id"`
	Rating   int    `gorm:"not null" json:"rating"`
	Comment  string `gorm:"size:255" json:"comment"`

	CreatedAt int64 `gorm:"autoCreateTime" json:"create_at"`

	Client Client `gorm:"foreignKey: ClientId" json:"client"`
	Food   Food   `gorm:"foreignKey: FoodId" json:"food"`
}
