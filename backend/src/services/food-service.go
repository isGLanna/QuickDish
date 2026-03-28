package services

import (
	"backend/src/models"
	"backend/src/validators"
	"fmt"

	"gorm.io/gorm"
)

type FoodService struct {
	db *gorm.DB
}

func NewFoodService() *FoodService {
	return &FoodService{db: &gorm.DB{}}
}

func (s *FoodService) CreateFood(newFood *validators.FoodSchema) error {
	err := s.db.Raw(`
		CREATE INTO food (company_id, name, description, price)
		VALUES($1, $2, $3, $4)`,
		newFood.CompanyId, newFood.Name, newFood.Description, newFood.Price).Error

	if err != nil {
		return fmt.Errorf("failed to create food: %w", err)
	}

	return nil
}

func (s *FoodService) UpdateFood(id uint, companyId uint, newFood *validators.UpdateFoodSchema) error {
	food := models.Food{
		Id:          id,
		CompanyId:   companyId,
		Name:        newFood.Name,
		Price:       newFood.Price,
		Description: newFood.Description,
	}

	return s.db.Raw(`
		UPDATE food
		SET name = $1, price = $2, description = $3
		WHERE id = $4 AND company_id = $5`, food.Name, food.Price, food.Description, food.Id, food.CompanyId).Error
}

func (s *FoodService) DeleteFood(id uint, companyId uint) error {
	return s.db.Raw(`DELETE FROM food WHERE id = $1 AND company_id = $2`, id, companyId).Error
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
		HAVING AVG(r.rating) > 3.5
		ORDER BY RANDOM()
		LIMIT 10
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

func (s *FoodService) GetFoodSuggestions(clientId uint, queries int) ([]models.Food, error) {
	var foods []models.Food

	if err := s.db.Raw(`
		SELECT f.*, COALESCE(AVG(r.rating), 0) AS average_rating
		FROM food f
			JOIN review r ON r.food_id = f.id
		LIMIT $1 OFFSET $2`, 20, queries*20).
		Scan(&foods).Error; err != nil {
		return nil, fmt.Errorf("Failed to get food suggestions: %w", err)
	}

	return foods, nil
}
