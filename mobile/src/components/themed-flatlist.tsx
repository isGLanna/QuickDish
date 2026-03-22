import { FlatList, FlatListProps, StyleProp, ViewStyle } from 'react-native'

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedFlatListProps<ItemT> = FlatListProps<ItemT> & {
  lightColor?: string
  darkColor?: string
  style?: StyleProp<ViewStyle>
}

export function ThemedFlatList<ItemT>({ style, lightColor, darkColor, ...otherProps }: ThemedFlatListProps<ItemT>) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'container')
  const border = useThemeColor({ light: lightColor, dark: darkColor }, 'border')

  return <FlatList style={[{ backgroundColor: backgroundColor }, style]}
    {...otherProps} />
}