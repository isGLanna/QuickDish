import { View, ScrollView, StyleSheet, FlatList } from 'react-native'
import { foodModel } from '@/api/food-model'
import { Dish } from '@/types/food.types'
import { ThemedText } from '@comp/index'
import { useState, useEffect } from 'react'
import { FavoriteDishesSkeleton } from '@/components/organisms/profile/favorite-food/skeleton'
import { columns } from '../index'
import { Card } from '@comp/organisms/home/card'

export default function FavoriteFoods() {
  const [favoriteFoods, setFavoriteFoods] = useState<Dish[]>([])
  const [ isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const isLoadingFoods = async () => {
      setIsLoading(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const response = await foodModel.getFavoriteDishes()

        setFavoriteFoods(response)
      } catch (error) {
        alert('Erro ao carregar os alimentos favoritos')
      } finally {
        setIsLoading(false)
      }
    }
    isLoadingFoods()
  }, [])

  const header = (
    <View>
      <View>
        <ThemedText type='subtitle'>Meus Favoritos</ThemedText>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      {isLoading ? (
          <View>
            <ThemedText type='subtitle'>Meus Favoritos</ThemedText>
            <FavoriteDishesSkeleton />
          </View>
      ) : (
        favoriteFoods.length > 0 ? (
          <FlatList
            data={favoriteFoods}
            numColumns={columns}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Card item={item} /> }
            ListHeaderComponent={header}
          />)
        : (
          <ThemedText>Você ainda não tem alimentos favoritos.</ThemedText>
        )
      )}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 8,
  },

})