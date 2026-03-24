package services

import (
	"backend/src/models"

	"fmt"

	"gorm.io/gorm"
)

type FoodService struct {
	db *gorm.DB
}

func NewFoodService(db *gorm.DB) *FoodService {
	return &FoodService{db: db}
}

func (s *FoodService) CreateFood(name string, price int, enterpriseId uint) error {
	food := models.Food{
		Name:         name,
		Price:        price,
		EnterpriseId: enterpriseId,
	}

	err := s.db.Create(&food).Error

	if err != nil {
		return fmt.Errorf("failed to create food: %w", err)
	}
	return nil
}

// Retornar comidas mais populares
func (s *FoodService) GetPopularFoods() ([]models.Food, error) {
	var foods []models.Food

	// Priorizar exibir produtos com avaliação superior a 4 e mais recentes
	if err := s.db.Raw(`
		SELECT f.*, COALESCE(AVG(r.rating), 0) AS average_rating
		FROM food f
			JOIN review r ON r.food_id = f.id
		GROUP BY f.id
		ORDER BY f.id DESC
		`).Scan(&foods).Error; err != nil {
		return nil, fmt.Errorf("Failed to get popular foods: %w", err)
	}

	return foods, nil
}

// Retornar sugestão de comida (por enquanto, sem regras)
/* REGRAS:
- Avaliação média superior a 3
- Priorizar comidas mais relacionadas ao cliente, baseado em eventos
- Garantir que itens não relacionados ao cliente seja exibido, para evitar bolhas de filtros
*/
func (s *FoodService) GetFoodSuggestions(clientId uint) ([]models.Food, error) {
	var foods []models.Food

	if err := s.db.Raw(`
		SELECT f.*, COALESCE(AVG(r.rating), 0) AS average_rating
		FROM food f
			JOIN review r ON r.food_id = f.id
		LIMIT 20`).Scan(&foods).Error; err != nil {
		return nil, fmt.Errorf("Failed to get food suggestions: %w", err)
	}

	return foods, nil
}
