export interface Category {
  id: number
  category: string
  icon: string
}

export interface Dish {
  id: number
  name: string
  price: number
  category: string
  image: string
  rating: number
}

export interface Restaurant {
  id: number
  name: string
  image: string
}

export type DishPayload = Omit<Dish, 'id'>

export interface DishQuery {
  search?: string
  category?: string
  limit?: number
}

export interface CreateDishOptions {
  addToPopular?: boolean
  addToRecommended?: boolean
}

export interface UpdateDishInput {
  id: number
  data: Partial<DishPayload>
}
