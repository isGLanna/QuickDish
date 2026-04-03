import { View, FlatList } from 'react-native'
import { columns } from '@/app/(tabs)/index'
import { Card, CardSkeleton } from '../../home'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'

export function FavoriteDishesSkeleton() {
  
  return (
    <FlatList
      data={Array.from({ length: columns * 4 }, (_, i) => i)}
      renderItem={() => <CardSkeleton />}
      numColumns={columns}
    />
  )
}