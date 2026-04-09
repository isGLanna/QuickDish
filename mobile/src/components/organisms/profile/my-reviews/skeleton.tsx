import { ListCard, ListCardSkeleton } from '@organisms/list-card'
import { FlatList } from 'react-native'
import { columns } from '@/app/(tabs)/index'


export function MyReviewsSkeleton() {
  const columnsAdapter = Math.floor(columns / 2)
  return (
    <FlatList
      data={Array.from({ length: columnsAdapter * 6 }, (_, i) => i)}
      numColumns={columnsAdapter}
      renderItem={(item) => <ListCardSkeleton/>}
    />
  )
}