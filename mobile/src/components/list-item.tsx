import { Pressable, type PressableProps } from 'react-native'

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedPressableProps = PressableProps & {
  lightColor?: string
  darkColor?: string
}

export function ListItem({ style, lightColor, darkColor, ...otherProps }: ThemedPressableProps) {
  const border = useThemeColor({ light: lightColor, dark: darkColor }, 'border')

  return <Pressable style={(state) => [{ borderColor: border },
    typeof style === 'function' ? style(state) : style]}
    {...otherProps} />
}