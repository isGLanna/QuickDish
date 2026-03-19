import { TouchableOpacity, View, ScrollView, Text, TextInput, FlatList, ListRenderItem, Image, StyleSheet } from 'react-native'
import { SearchBar } from '../components/organisms/search-bar'
import { useState } from 'react'

interface Categories {
  id: number
  name: string
  emoji: string
}

interface FoodItem {
  id: number
  name: string
  price: number
  image: string
  rating: number
}

const categories = [
  { id: 1, name: 'Pizza', emoji: '🍕' },
  { id: 2, name: 'Hambúrguer', emoji: '🍔' },
  { id: 3, name: 'Marmita', emoji: '🍱' },
  { id: 4, name: 'Sushi', emoji: '🍣' },
  { id: 5, name: 'Caldo', emoji: '🍲' },
  { id: 6, name: 'Bebida', emoji: '🥤' },
  { id: 7, name: 'Gelados', emoji: '🍨' },
]

const popularItems = [
  { id: 1, name: 'Pizza Margherita', price: 2999, image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', rating: 4.5 },
  { id: 2, name: 'Hambúrguer Clássico', price: 1999, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349', rating: 4.0 },
  { id: 3, name: 'Sushi de Salmão', price: 3999, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', rating: 4.8 },
  { id: 4, name: 'Caldo de Frango', price: 1599, image: 'https://www.receiteria.com.br/wp-content/uploads/caldo-de-frango-com-batatas.jpeg', rating: 4.2 },
  { id: 5, name: 'Refrigerante', price: 499, image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a', rating: 4.0 },
  { id: 6, name: 'Açaí na Tigela', price: 1999, image: 'https://images.unsplash.com/photo-1590080874088-eec64895b423', rating: 4.7 },
  { id: 7, name: 'Bolo de Chocolate', price: 2499, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c', rating: 4.6 },
  { id: 8, name: 'Pizza Pepperoni', price: 3199, image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65', rating: 4.4 },
]

const recommendedItems = [
  { id: 1, name: 'Pizza Margherita', price: 2999, image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', rating: 4.5 },
  { id: 2, name: 'Hambúrguer Clássico', price: 1999, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349', rating: 4.0 },
  { id: 3, name: 'Sushi de Salmão', price: 3999, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', rating: 4.8 },
  { id: 4, name: 'Caldo de Frango', price: 1599, image: 'https://www.receiteria.com.br/wp-content/uploads/caldo-de-frango-com-batatas.jpeg', rating: 4.2 },
  { id: 5, name: 'Refrigerante', price: 499, image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a', rating: 4.0 },
  { id: 6, name: 'Açaí na Tigela', price: 1999, image: 'https://images.unsplash.com/photo-1590080874088-eec64895b423', rating: 4.7 },
  { id: 7, name: 'Bolo de Chocolate', price: 2499, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c', rating: 4.6 },
  { id: 8, name: 'Pizza Pepperoni', price: 3199, image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65', rating: 4.4 },
  { id: 9, name: 'Pizza Margherita', price: 2999, image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', rating: 4.5 },
  { id: 10, name: 'Hambúrguer Clássico', price: 1999, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349', rating: 4.0 },
  { id: 11, name: 'Sushi de Salmão', price: 3999, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', rating: 4.8 },
  { id: 12, name: 'Caldo de Frango', price: 1599, image: 'https://www.receiteria.com.br/wp-content/uploads/caldo-de-frango-com-batatas.jpeg', rating: 4.2 },
  { id: 13, name: 'Refrigerante', price: 499, image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a', rating: 4.0 },
  { id: 14, name: 'Açaí na Tigela', price: 1999, image: 'https://images.unsplash.com/photo-1590080874088-eec64895b423', rating: 4.7 },
  { id: 15, name: 'Bolo de Chocolate', price: 2499, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c', rating: 4.6 },
  { id: 16, name: 'Pizza Pepperoni', price: 3199, image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65', rating: 4.4 },
]

const renderCategories: ListRenderItem<Categories> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.ContentCategories}>
      <Text>{item.name}</Text>
      <Text style={styles.Emoji}>{item.emoji}</Text>
    </TouchableOpacity>
  )
}

const renderItem: ListRenderItem<FoodItem> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.ContentItems}>
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 100, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
      <Text numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Text>R${(item.price / 100).toFixed(2)}</Text>
        <Text>{item.rating}⭐</Text>
      </View>
      
</TouchableOpacity>
  )
}

export default function DeliveryHome() {
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* CATEGORIES */}
      <View  style={{ marginInline: 8, marginBlock: 4}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={categories => categories.id.toString()}
          renderItem={renderCategories}
          />
      </View>

      {/* POPULAR ITEMS */}

      <View style={{ marginInline: 8, marginBlock: 4}}>
        <Text>Mais populares</Text>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={popularItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          style={styles.gridItems}
          />
      </View>

      {/* RECOMMENDED FOR YOU, deve exibir até 3 linhas de itens em grid com wrap*/}
      <View  style={{ marginInline: 8, marginBlock: 4}}>
        <Text>Sugestões de pedidos</Text>
        <FlatList
          numColumns={3}
          data={recommendedItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          style={styles.gridItems}
          />
      </View>

    </ ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7e8d2',
  },

  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    margin: 8,
    outlineStyle: 'solid',
    outlineColor: '#ccc',
    outlineWidth: 1,
  },

  input:{
    flex: 1,
    borderWidth: 0,
    color: '#222',
  },

  gridItems: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 4,
    gap: 16,
  },

  ContentCategories: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    width: 100,
    aspectRatio: 3/2,
    borderRadius: 8,
    margin: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Emoji: {
    fontSize: 18,
  },

  ContentItems: {
    flex: 1,
    margin: 4,
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 4,
  }
})