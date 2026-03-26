import { Pressable, type PressableProps, StyleSheet } from 'react-native'
import { ThemedText } from '@comp/themed-text'

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedPressableProps = PressableProps & {
  lightColor?: string
  darkColor?: string
  children?: React.ReactNode | ((state: { pressed: boolean }) => React.ReactNode)
}

export function ListItem({ style, lightColor, darkColor, children, ...otherProps }: ThemedPressableProps) {
  const border = useThemeColor({ light: lightColor, dark: darkColor }, 'border')

  return <Pressable style={(state) => [{ borderColor: border },
    typeof style === 'function' ? style(state) : style]}
    {...otherProps}>
      <ThemedText style={styles.text}>
        {typeof children === 'function' ? null : children}
      </ThemedText>
    </Pressable>
}

const styles = StyleSheet.create({
  text: {
    userSelect: 'none',
  }
})