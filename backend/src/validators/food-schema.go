package validators

// Nome com tamanho máximo de 100
type FoodSchema struct {
	Name        string `json:"name" binding:"required,max=50"`
	Price       int    `json:"price" binding:"required"`
	Description string `json:"description" binding:"max=255"`
	CompanyId   uint   `json:"company_id" binding:"required"`
}

type UpdateFoodSchema struct {
	Name        string `json:"name" binding:"max=50"`
	Price       int    `json:"price"`
	Description string `json:"description" binding:"max=255"`
}
