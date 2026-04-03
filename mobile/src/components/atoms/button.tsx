import { TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import { Colors } from '@/styles/theme'

import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemedText } from './themed-text';

export type ButtonProps = TouchableOpacityProps & {
  text: string
  type?: 'default' | 'neutral' | 'danger' | 'success'
}

export function Button({text, type='default', ...rest}: ButtonProps) {
  const color = useThemeColor({}, 'text') as string

  const buttonBackgroundColor =
    type === 'default' ? Colors.blue._500 :
    type === 'neutral' ? Colors.gray._500 :
    type === 'danger' ? Colors.red._500 :
    Colors.green._500

  return(
    <TouchableOpacity style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
      {...rest}>
      <ThemedText style={{ fontWeight: '600', color }}>{text}</ThemedText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    height: 35,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
})