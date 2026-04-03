import { View, ScrollView, StyleSheet } from 'react-native'
import { foodModel } from '@/api/food-model'
import { Dish } from '@/types/food.types'
import { ThemedText } from '@comp/index'
import { useState, useEffect } from 'react'
import { CardSkeleton } from '@/components/organisms/home/card-skeleton'

export default function FavoriteFoods() {
  const [favoriteFoods, setFavoriteFoods] = useState<Dish[]>([])
  const [ isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const isLoadingFoods = async () => {
      setIsLoading(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 50000));
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

  return (
    <ScrollView style={styles.container}>
      <View>
        <ThemedText type='subtitle'>Meus Favoritos</ThemedText>
      </View>

      

      {isLoading ? (
        Array.from({ length: 10 }, (_, i) => <CardSkeleton key={i} />)
      ) : (
        favoriteFoods.length > 0 ? (
          favoriteFoods.map((food) => (
            <View key={food.id}>
              <ThemedText>{food.name}</ThemedText>
            </View>
          ))
        ) : (
          <ThemedText>Você ainda não tem alimentos favoritos.</ThemedText>
        )
      )}
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 8,
  },

})