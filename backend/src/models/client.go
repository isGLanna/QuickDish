package models

type Client struct {
	Id        uint      `gorm:"primaryKey autoIncrement" json:"id"`
	Name      string    `gorm:"not null; varchar(30)" json:"name"`
	Surname   string    `gorm:"not null; varchar(75)" json:"surname"`
	Email     string    `gorm:"not null; varchar(100); unique" json:"email"`
	Password  string    `gorm:"not null; varchar(255)" json:"password"`
	Telephone string    `gorm:"not null; varchar(15)" json:"telephone"`
	Address   []Address `gorm:"foreignKey:ClientId" json:"address"`
}
