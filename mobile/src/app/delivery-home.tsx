import { View, ScrollView, Text, TextInput, FlatList } from 'react-native'

const categories = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Hambúrguer' },
  { id: 3, name: 'Sushi' },
  { id: 4, name: 'Caldo' },
  { id: 5, name: 'Bebida' },
  { id: 6, name: 'Açaí' },
  { id: 7, name: 'Salada' },
  { id: 8, name: 'Doce' },
]

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
      <View/>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item => item.id}
          renderItem={renderCategory}
          />
      </View>

      {/* POPULAR ITEMS */}

      <View>
        <Text></Text>
        <FlatList />
      </View>

  
    </ScrollView>
  )
}