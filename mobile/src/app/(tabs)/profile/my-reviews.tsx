import { View, StyleSheet, FlatList } from 'react-native'
import { foodModel } from '@/api/food-model'
import { ThemedText } from '@comp/index'
import { useState, useEffect } from 'react'
import { FavoriteDishesSkeleton } from '@/components/organisms/profile/favorite-food/skeleton'
import { columns } from '../index'
import { ListCard } from '@/components/organisms/list-card'
import { FoodReview } from '@/types/food-review'

export default function MyReviews() {
  const [availableFoods, setAvailableFoods] = useState<FoodReview[]>([])
  const [ isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const isLoadingFoods = async () => {
      setIsLoading(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const response = await foodModel.getFoodReviewsByUser(1)

        setAvailableFoods(response)
      } catch (error) {
        alert('Erro ao carregar os alimentos favoritos')
      } finally {
        setIsLoading(false)
      }
    }
    isLoadingFoods()
  }, [])

  const removeReview = (id: number) => {
    setAvailableFoods(prev => prev.filter(prev => prev.id !== id))
  }

  const adapterNumColumns = Math.floor(columns / 2)

  return (
    <View style={styles.container}>
      <View>
        <ThemedText type='subtitle'>Minhas avaliações</ThemedText>
      </View>
      {isLoading ? (
        <FavoriteDishesSkeleton />
      ) : (
        availableFoods.length > 0 ? (
          <FlatList
            data={availableFoods}
            numColumns={adapterNumColumns}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <ListCard item={item} />}
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