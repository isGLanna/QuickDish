import { View, FlatList } from 'react-native'
import { columns } from '@/app/(tabs)/index'

export function FavoriteFoodsSkeleton() {
  
  return (
    <Flatlist
      data={Array.from({ length: 6 })}
      keyExtractor={(_, index) => index.toString()}
      numColumns={columns}
    />
  )
}