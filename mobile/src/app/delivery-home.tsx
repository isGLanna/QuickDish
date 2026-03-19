import { TouchableOpacity, View, ScrollView, Text, TextInput, FlatList, ListRenderItem, Image } from 'react-native'

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
  { id: 3, name: 'Sushi', emoji: '🍣' },
  { id: 4, name: 'Caldo', emoji: '🍲' },
  { id: 5, name: 'Bebida', emoji: '🥤' },
  { id: 6, name: 'Açaí', emoji: '🥤' },
  { id: 7, name: 'Doce', emoji: '🍰' },
]

const popularItems = [
  { id: 1, name: 'Pizza Margherita', price: 2999, image: 'https://example.com/pizza.jpg', rating: 4.5 },
  { id: 2, name: 'Hambúrguer Clássico', price: 1999, image: 'https://example.com/hamburger.jpg', rating: 4.0 },
  { id: 3, name: 'Sushi de Salmão', price: 3999, image: 'https://example.com/sushi.jpg', rating: 4.8 },
  { id: 4, name: 'Caldo de Frango', price: 1599, image: 'https://example.com/chicken_soup.jpg', rating: 4.2 },
  { id: 5, name: 'Refrigerante', price: 499, image: 'https://example.com/soda.jpg', rating: 4.0 },
  { id: 6, name: 'Açaí na Tigela', price: 1999, image: 'https://example.com/acai.jpg', rating: 4.7 },
  { id: 7, name: 'Bolo de Chocolate', price: 2499, image: 'https://example.com/chocolate_cake.jpg', rating: 4.6 },
  { id: 8, name: 'Pizza Pepperoni', price: 3199, image: 'https://example.com/pepperoni_pizza.jpg', rating: 4.4 },
]

const recommendedItems = [
  { id: 1, name: 'Pizza Margherita', price: 2999, image: 'https://example.com/pizza.jpg', rating: 4.5 },
  { id: 2, name: 'Hambúrguer Clássico', price: 1999, image: 'https://example.com/hamburger.jpg', rating: 4.0 },
  { id: 3, name: 'Sushi de Salmão', price: 3999, image: 'https://example.com/sushi.jpg', rating: 4.8 },
  { id: 4, name: 'Caldo de Frango', price: 1599, image: 'https://example.com/chicken_soup.jpg', rating: 4.2 },
  { id: 5, name: 'Refrigerante', price: 499, image: 'https://example.com/soda.jpg', rating: 4.0 },
  { id: 6, name: 'Açaí na Tigela', price: 1999, image: 'https://example.com/acai.jpg', rating: 4.7 },
  { id: 7, name: 'Bolo de Chocolate', price: 2499, image: 'https://example.com/chocolate_cake.jpg', rating: 4.6 },
  { id: 8, name: 'Pizza Pepperoni', price: 3199, image: 'https://example.com/pepperoni_pizza.jpg', rating: 4.4 },
]

const renderCategories: ListRenderItem<Categories> = ({ item }) => {
  return (
    <TouchableOpacity >
      <Text>{item.name}</Text>
      <Text>{item.emoji}</Text>
    </TouchableOpacity>
  )
}

const renderItem: ListRenderItem<FoodItem> = ({ item }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text>{item.name}</Text>
      <Text>R${(item.price / 100).toFixed(2)}</Text>
      <Text>{item.rating} ⭐</Text>
</TouchableOpacity>
  )
}

export default function DeliveryHome() {
  return (
    <ScrollView>
      {/* HEADER */}
      <View>
        <TextInput
          placeholder='Qual seu pedido hoje?'
          />
      </View>

      {/* CATEGORIES */}
      <View >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={categories => categories.id.toString()}
          renderItem={renderCategories}
          />
      </View>

      {/* POPULAR ITEMS */}

      <View>
        <Text></Text>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={popularItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          />
      </View>

      {/* RECOMMENDED FOR YOU, deve exibir até 3 linhas de itens em grid com wrap*/}
      <View>
        <Text></Text>
        <FlatList 
          numColumns={3}
          data={recommendedItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem} 
          />
      </View>

  
    </ ScrollView>
  )
}