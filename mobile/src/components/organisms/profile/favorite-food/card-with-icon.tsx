import { View } from 'react-native'
import { Card } from '@comp/organisms/card'
import { Dish } from '@/types/food.types'
import Icon from 'react-native-vector-icons/MaterialIcons'

type CardWithIconProps = {
  item: Dish
  onFavoriteToggle?: (id: number) => void
}

export function CardWithIcon({ item, onFavoriteToggle }: CardWithIconProps) {
  return (
    <View style={{ flex: 1 }}>
      <Card item={item} />
      <Icon name="favorite" size={20} onPress={() => onFavoriteToggle && onFavoriteToggle(item.id)} color="red" style={{ position: 'absolute', top: 10, right: 10}} />
    </View>
  )
}