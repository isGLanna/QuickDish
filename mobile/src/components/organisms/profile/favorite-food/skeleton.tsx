import { FlatList } from 'react-native'
import { columns } from '@/app/(tabs)/index'
import { CardSkeleton } from '../../home'

export function FavoriteDishesSkeleton() {
  
  return (
    <FlatList
      data={Array.from({ length: columns * 4 }, (_, i) => i)}
      renderItem={() => <CardSkeleton />}
      numColumns={columns}
    />
  )
}