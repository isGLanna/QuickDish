package infra

import "gorm.io/gorm"

func Transaction[T any](database *gorm.DB, fn func(db *gorm.DB) (T, error)) (T, error) {
	callback := *new(T)

	err := database.Transaction(
		func(db *gorm.DB) error {
			result, err := fn(db)

			if err != nil {
				return err
			}
			callback = result
			return nil
		})

	return callback, err
}
