import { View, StyleSheet, FlatList } from 'react-native'
import { foodModel } from '@/api/food-model'
import { Dish } from '@/types/food.types'
import { ThemedText } from '@comp/index'
import { useState, useEffect } from 'react'
import { FavoriteDishesSkeleton } from '@organisms/profile/favorite-food/skeleton'
import { columns } from '../index'
import { CardWithIcon } from '@organisms/profile/favorite-food/card-with-icon'

export default function FavoriteFoods() {
  const [favoriteFoods, setFavoriteFoods] = useState<Dish[]>([])
  const [ isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const isLoadingFoods = async () => {
      setIsLoading(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 3000));
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

  const removeFromFavorites = (id: number) => {
    setFavoriteFoods(prev => prev.filter(prev => prev.id !== id))
  }
  return (
    <View style={styles.container}>
      <View>
        <ThemedText type='subtitle'>Meus Favoritos</ThemedText>
      </View>
      {isLoading ? (
        <FavoriteDishesSkeleton />
      ) : (
        favoriteFoods.length > 0 ? (
          <FlatList
            data={favoriteFoods}
            numColumns={columns}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <CardWithIcon item={item} onFavoriteToggle={removeFromFavorites} />}
          />)
        : (
          <ThemedText>Salve aquele seu lanche que você gosta!</ThemedText>
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