import { popularItems, recommendedItems, foodReviews } from './food'
import type {
  CreateDishOptions,
  Dish,
  DishPayload,
  DishQuery,
  UpdateDishInput,
} from '../types/food.types'

const dishStore = {
  popular: popularItems.map(item => ({ ...item })),
  recommended: recommendedItems.map(item => ({ ...item })),
}

const cloneDish = (dish: Dish): Dish => ({ ...dish })

const normalize = (value: string): string => value.trim().toLowerCase()

const applyQuery = (items: Dish[], query?: DishQuery): Dish[] => {
  if (!query) {
    return items
  }

  const normalizedSearch = query.search ? normalize(query.search) : undefined
  const normalizedCategory = query.category ? normalize(query.category) : undefined

  let filtered = items

  if (normalizedSearch) {
    filtered = filtered.filter(item => normalize(item.name).includes(normalizedSearch))
  }

  if (normalizedCategory) {
    filtered = filtered.filter(item => normalize(item.category) === normalizedCategory)
  }

  if (typeof query.limit === 'number' && query.limit >= 0) {
    filtered = filtered.slice(0, query.limit)
  }

  return filtered
}

const getHighestDishId = (): number => {
  const allIds = [...dishStore.popular, ...dishStore.recommended].map(item => item.id)
  return allIds.length === 0 ? 0 : Math.max(...allIds)
}

const replaceById = (items: Dish[], id: number, updater: (dish: Dish) => Dish): Dish[] =>
  items.map(item => (item.id === id ? updater(item) : item))

const removeById = (items: Dish[], id: number): Dish[] => items.filter(item => item.id !== id)

export const foodModel = {
  getPopularDishes(query?: DishQuery): Dish[] {
    return applyQuery(dishStore.popular, query).map(cloneDish)
  },

  getRecommendedDishes(query?: DishQuery): Dish[] {
    return applyQuery(dishStore.recommended, query).map(cloneDish)
  },

  createDish(payload: DishPayload, options?: CreateDishOptions): Dish {
    const newDish: Dish = {
      id: getHighestDishId() + 1,
      ...payload,
    }

    const shouldAddToPopular = options?.addToPopular ?? true
    const shouldAddToRecommended = options?.addToRecommended ?? true

    if (shouldAddToPopular) {
      dishStore.popular.push(newDish)
    }

    if (shouldAddToRecommended) {
      dishStore.recommended.push(newDish)
    }

    return cloneDish(newDish)
  },

  updateDish({ id, data }: UpdateDishInput): Dish | null {
    let updatedDish: Dish | null = null

    const updateDishItem = (dish: Dish): Dish => {
      const nextDish: Dish = { ...dish, ...data }
      if (!updatedDish) {
        updatedDish = nextDish
      }
      return nextDish
    }

    dishStore.popular = replaceById(dishStore.popular, id, updateDishItem)
    dishStore.recommended = replaceById(dishStore.recommended, id, updateDishItem)

    return updatedDish ? cloneDish(updatedDish) : null
  },

  deleteDish(id: number): boolean {
    const beforeCount = dishStore.popular.length + dishStore.recommended.length

    dishStore.popular = removeById(dishStore.popular, id)
    dishStore.recommended = removeById(dishStore.recommended, id)

    const afterCount = dishStore.popular.length + dishStore.recommended.length
    return afterCount < beforeCount
  },

  getFavoriteDishes(): Dish[] {
    const allDishes = [...dishStore.popular]
    return allDishes
  },

  deleteFavoriteDish(id: number): boolean {
    const beforeCount = dishStore.popular.length

    dishStore.popular = removeById(dishStore.popular, id)
    
    const afterCount = dishStore.popular.length
    return afterCount < beforeCount
  },

  // Consultar reviews de comidas feitas pelo próprio usuário
  getFoodReviewsByUser(userId: number) {
    return foodReviews
  }
}
