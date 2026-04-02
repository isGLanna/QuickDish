import { Pressable, type PressableProps, StyleSheet } from 'react-native'

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedPressableProps = PressableProps & {
  lightColor?: string
  darkColor?: string
}

export function Button({ style, lightColor, darkColor, ...otherProps }: ThemedPressableProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'container')
  const border = useThemeColor({ light: lightColor, dark: darkColor }, 'border')

  return <Pressable style={(state) => [styles.button, { backgroundColor, borderColor: border },
    typeof style === 'function' ? style(state) : style]}
    {...otherProps} />
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
})