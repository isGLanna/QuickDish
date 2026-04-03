import { Pressable, type PressableProps } from 'react-native'

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedPressableProps = PressableProps & {
  lightColor?: string
  darkColor?: string
}

export function PressableItem({ style, lightColor, darkColor, ...otherProps }: ThemedPressableProps) {
  const containerColor = useThemeColor({ light: lightColor, dark: darkColor }, 'container')
  const borderThemeColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border')
  const container = Array.isArray(containerColor) ? containerColor[0] : containerColor
  const borderColor = Array.isArray(borderThemeColor) ? borderThemeColor[0] : borderThemeColor

  return <Pressable style={(state) => [{ backgroundColor: container, borderColor: borderColor, borderWidth: 1},
    typeof style === 'function' ? style(state) : style]}
    {...otherProps} />
}