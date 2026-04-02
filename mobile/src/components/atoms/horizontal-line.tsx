import { StyleSheet, View, ViewProps } from 'react-native'
import { Colors } from '@/styles/theme'
import { useAppTheme } from '@/contexts/theme-color'

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function HorizontalLine({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  // pegar tintColor com base no tema atual
  const lineColor = useAppTheme().color === 'light' ? (lightColor || Colors.light.tint) : (darkColor || Colors.dark.tint)

  return (
    <View style={[styles.line, { backgroundColor: lineColor }]} />
  )
}

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: Colors.gray._300,
    marginHorizontal: 8,
  },
})