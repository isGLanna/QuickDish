import type { Category, Dish } from '../types/food.types'
import type { Restaurant } from '../types/restaurant'

export const categories: Category[] = [
  { id: 1, category: 'Pizza', icon: '🍕' },
  { id: 2, category: 'Hambúrguer', icon: '🍔' },
  { id: 3, category: 'Marmita', icon: '🍱' },
  { id: 4, category: 'Sushi', icon: '🍣' },
  { id: 5, category: 'Caldo', icon: '🍲' },
  { id: 6, category: 'Bebida', icon: '🥤' },
  { id: 7, category: 'Gelados', icon: '🍨' },
]

export const popularItems: Dish[] = [
  { id: 1, name: 'Pizza Margherita', price: 2999, category: 'Pizza', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', rating: 4.5 },
  { id: 2, name: 'Hambúrguer Clássico', price: 1999, category: 'Hambúrguer', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349', rating: 4.0 },
  { id: 3, name: 'Sushi de Salmão', price: 3999, category: 'Sushi', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', rating: 4.8 },
  { id: 4, name: 'Caldo de Frango', price: 1599, category: 'Caldo', image: 'https://www.receiteria.com.br/wp-content/uploads/caldo-de-frango-com-batatas.jpeg', rating: 4.2 },
  { id: 5, name: 'Refrigerante', price: 499, category: 'Bebida', image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a', rating: 4.0 },
  { id: 6, name: 'Açaí na Tigela', price: 1999, category: 'Gelados', image: 'https://images.unsplash.com/photo-1590080874088-eec64895b423', rating: 4.7 },
  { id: 7, name: 'Bolo de Chocolate', price: 2499, category: 'Gelados', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c', rating: 4.6 },
  { id: 8, name: 'Pizza Pepperoni', price: 3199, category: 'Pizza', image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65', rating: 4.4 },
]

export const restaurants: Restaurant[] = [
  { id: 1, name: "McDonald's", image: "https://logo-teka.com/wp-content/uploads/2025/06/mcdonalds-sign-logo.png" },
  { id: 2, name: "Pizza Hut", image: "https://www.pngkey.com/png/detail/123-1230034_pizza-hut-logo-transparent.png" },
  { id: 3, name: "Subway", image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg" },
  { id: 4, name: "Starbucks", image: "https://logospng.org/download/starbucks/logo-starbucks-512.png" },
  { id: 5, name: "Burger King", image: "https://logospng.org/download/burger-king/logo-burger-king-512.png" },
  { id: 6, name: "KFC", image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg" },
  { id: 7, name: "Domino's Pizza", image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg" }
]

export const recommendedItems: Dish[] = [
  { id: 1, name: 'Pizza Margherita', price: 2999, category: 'Pizza', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', rating: 4.5 },
  { id: 2, name: 'Hambúrguer Clássico', price: 1999, category: 'Hambúrguer', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349', rating: 4.0 },
  { id: 3, name: 'Sushi de Salmão', price: 3999, category: 'Sushi', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', rating: 4.8 },
  { id: 4, name: 'Caldo de Frango', price: 1599, category: 'Caldo', image: 'https://www.receiteria.com.br/wp-content/uploads/caldo-de-frango-com-batatas.jpeg', rating: 4.2 },
  { id: 5, name: 'Refrigerante', price: 499, category: 'Bebida', image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a', rating: 4.0 },
  { id: 6, name: 'Açaí na Tigela', price: 1999, category: 'Gelados', image: 'https://images.unsplash.com/photo-1590080874088-eec64895b423', rating: 4.7 },
  { id: 7, name: 'Bolo de Chocolate', price: 2499, category: 'Gelados', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c', rating: 4.6 },
  { id: 8, name: 'Pizza Pepperoni', price: 3199, category: 'Pizza', image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65', rating: 4.4 },
  { id: 9, name: 'Pizza Margherita', price: 2999, category: 'Pizza', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', rating: 4.5 },
  { id: 10, name: 'Hambúrguer Clássico', price: 1999, category: 'Hambúrguer', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349', rating: 4.0 },
  { id: 11, name: 'Sushi de Salmão', price: 3999, category: 'Sushi', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', rating: 4.8 },
  { id: 12, name: 'Caldo de Frango', price: 1599, category: 'Caldo', image: 'https://www.receiteria.com.br/wp-content/uploads/caldo-de-frango-com-batatas.jpeg', rating: 4.2 },
  { id: 16, name: 'Pizza Pepperoni', price: 3199, category: 'Pizza', image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65', rating: 4.4 },
]

export const foodReviews = [
  { id: 1, foodName: 'Pizza Margherita', foodImage: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', rating: 5, comment: 'A melhor pizza que já comi! Massa fina e sabor incrível.', createdAt: '2024-06-01T12:00:00Z' },
  { id: 2, foodName: 'Hambúrguer Clássico', foodImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349', rating: 4, comment: 'Muito bom, mas poderia ser um pouco mais suculento.', createdAt: '2024-06-02T15:30:00Z' },
  { id: 3, foodName: 'Sushi de Salmão', foodImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', rating: 2, comment: 'O sushi é ruim porque eu mesmo já não gosto de peixe, então se lasque mesmo assim. Quero nem saber, fizesse um peixe gostoso com sabor de um churrasco já tava bom!', createdAt: '2024-06-03T18:45:00Z' },
]