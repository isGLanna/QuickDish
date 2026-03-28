package models

type Order struct {
	Id          uint    `gorm:"primaryKey autoIncrement" json:"id"`
	FoodId      uint    `gorm:"not null" json:"food_id"`
	UserId      uint    `gorm:"not null" json:"user_id"`
	AddressId   uint    `gorm:"not null" json:"address_id"`
	TotalPrice  int     `gorm:"not null integer" json:"total_price"`
	Description string  `gorm:"varchar(255)" json:"description"`
	Destination string  `gorm:"not null; varchar(255)" json:"destination"`
	Status      string  `gorm:"not null; varchar(20)" json:"status"`
	CreatedAt   int64   `gorm:"autoCreateTime" json:"created_at"`
	Food        Food    `gorm:"foreignKey:FoodId" json:"food"`
	User        User    `gorm:"foreignKey: UserId" json:"user"`
	Address     Address `gorm:"foreignKey: AddressId" json:"address"`
}

/* Adendos:
- Mesmo que o usuário utilize o endereço padrão, deve ser criado um novo endereço para cada pedido, pois o cliente pode querer alterar o endereço padrão durante uma entrega
*/

// TODO: armazenar status do pedido, como entregue ou não e descrição do pedido por parte do cliente, entregador e restaurante
