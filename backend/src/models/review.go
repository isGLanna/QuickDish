package models

type Review struct {
	Id      uint   `gorm:"primaryKey autoIncrement" json:"id"`
	UserId  uint   `gorm:"not null" json:"user_id"`
	FoodId  uint   `gorm:"not null" json:"food_id"`
	Rating  int    `gorm:"not null" json:"rating"`
	Comment string `gorm:"size:255" json:"comment"`

	CreatedAt int64 `gorm:"autoCreateTime" json:"create_at"`

	User User `gorm:"foreignKey: UserId" json:"user"`
	Food Food `gorm:"foreignKey: FoodId" json:"food"`
}
