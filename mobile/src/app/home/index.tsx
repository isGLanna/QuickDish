import { View, ScrollView, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import { SearchBar } from '../../components/molecules/search-bar'
import { CategoryCard } from './category'
import { Card } from './card'
import { useState } from 'react'


interface Food {
  id: number
  name: string
  price: number
  image: string
  rating: number
}

const categories = [
  { id: 1, category: 'Pizza', emoji: '🍕' },
  { id: 2, category: 'Hambúrguer', emoji: '🍔' },
  { id: 3, category: 'Marmita', emoji: '🍱' },
  { id: 4, category: 'Sushi', emoji: '🍣' },
  { id: 5, category: 'Caldo', emoji: '🍲' },
  { id: 6, category: 'Bebida', emoji: '🥤' },
  { id: 7, category: 'Gelados', emoji: '🍨' },
]

const popularItems = [
  { id: 1, name: 'Pizza Margherita', price: 2999, category: 'Pizza', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', rating: 4.5 },
  { id: 2, name: 'Hambúrguer Clássico', price: 1999, category: 'Hambúrguer', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349', rating: 4.0 },
  { id: 3, name: 'Sushi de Salmão', price: 3999, category: 'Sushi', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', rating: 4.8 },
  { id: 4, name: 'Caldo de Frango', price: 1599, category: 'Caldo', image: 'https://www.receiteria.com.br/wp-content/uploads/caldo-de-frango-com-batatas.jpeg', rating: 4.2 },
  { id: 5, name: 'Refrigerante', price: 499, category: 'Bebida', image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a', rating: 4.0 },
  { id: 6, name: 'Açaí na Tigela', price: 1999, category: 'Gelados', image: 'https://images.unsplash.com/photo-1590080874088-eec64895b423', rating: 4.7 },
  { id: 7, name: 'Bolo de Chocolate', price: 2499, category: 'Gelados', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c', rating: 4.6 },
  { id: 8, name: 'Pizza Pepperoni', price: 3199, category: 'Pizza', image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65', rating: 4.4 },
]

const recommendedItems = [
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



export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const collumns = Dimensions.get('window').width > 500 ? Math.floor(Dimensions.get('window').width / 200) : 2
  

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* CATEGORIES */}
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CategoryCard item={item} />}
          />
      </View>

      {/* POPULAR ITEMS */}

      <View>
        <Text>Mais populares</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={popularItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Card item={item} />}
          style={styles.gridItems}
          />
      </View>

      <View>
        <Text>Sugestões de pedidos</Text>
        <FlatList
          numColumns={collumns}
          data={recommendedItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Card item={item} />}
          style={styles.gridItems}
          />
      </View>

    </ ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7e8d2',
    paddingBottom: 8,
    paddingHorizontal: 8,
  },

  gridItems: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 4,
    gap: 16,
  },
})