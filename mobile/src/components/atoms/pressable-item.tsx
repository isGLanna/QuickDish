import { Pressable, type PressableProps } from 'react-native'

import { useThemeColor } from '@/hooks/use-theme-color';
import { useAppTheme } from '@/contexts/theme-color';

export type ThemedPressableProps = PressableProps & {
  lightColor?: string
  darkColor?: string
}

export function PressableItem({ style, lightColor, darkColor, ...otherProps }: ThemedPressableProps) {
  const container = useThemeColor({ light: lightColor, dark: darkColor }, 'container')
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border')

  return <Pressable style={(state) => [{ backgroundColor: container, borderColor: borderColor, borderWidth: 5},
    typeof style === 'function' ? style(state) : style]}
    {...otherProps} />
}