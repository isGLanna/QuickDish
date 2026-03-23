package models

type Address struct {
	Id        uint `gorm:"primaryKey autoIncrement" json:"id"`
	ClientId  uint `gorm:"not null" json:"client_id"`
	IsPrimary bool `gorm:"not null" json:"is_primary"`

	Street    string `gorm:"not null; size:50" json:"street"`
	Reference string `gorm:"size:100" json:"reference"`
	Number    string `gorm:"not null; size:10" json:"number"`
	City      string `gorm:"not null; size:30" json:"city"`
	State     string `gorm:"not null; size:2" json:"state"`
	Cep       string `gorm:"not null; size:10" json:"cep"`
}
