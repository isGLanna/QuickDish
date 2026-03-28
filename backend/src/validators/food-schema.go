package validators

// Nome com tamanho máximo de 100
type FoodSchema struct {
	Name         string `json:"name" binding:"required,max=50"`
	Price        int    `json:"price" binding:"required"`
	Description  string `json:"description" binding:"max=255"`
	EnterpriseId uint   `json:"enterprise_id" binding:"required"`
}
