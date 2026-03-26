import { Pressable, type PressableProps } from 'react-native'

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedPressableProps = PressableProps & {
  lightColor?: string
  darkColor?: string
}

export function SelectableItem({ style, lightColor, darkColor, ...otherProps }: ThemedPressableProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'container')
  const border = useThemeColor({ light: lightColor, dark: darkColor }, 'border')

  return <Pressable style={(state) => [{ backgroundColor, borderColor: border },
    typeof style === 'function' ? style(state) : style]}
    {...otherProps} />
}