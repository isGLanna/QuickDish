import { useThemeColor } from '@/hooks/use-theme-color'
import { Colors } from '@/styles/theme'
import { TextInput, TextInputProps, StyleSheet } from 'react-native'
import { useAppTheme } from '@/contexts/theme-color'

interface InputProps extends TextInputProps {
  placeholder?: string
  type?: 'default' | 'email' | 'password' | 'telephone' | 'numeric'
}
export function Input({ placeholder, type = 'default', style, ...rest }: InputProps) {
  const placeholderTextColor = useAppTheme().color === 'light' ? Colors.gray._400 : Colors.gray._300
  const borderColor = useThemeColor({}, 'border') as string
  const color = useThemeColor({}, 'text') as string

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      style={[
        type === 'default' && { ...styles.default, borderColor, color },
        type === 'password' && { ...styles.default, borderColor, color },
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
})