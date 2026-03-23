package models

type Enterprise struct {
	Id   uint   `gorm:"primaryKey autoIncrement" json:"id"`
	Name string `gorm:"not null; varchar(30)" json:"name"`
}
