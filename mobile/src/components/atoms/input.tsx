import { useThemeColor } from '@/hooks/use-theme-color'
import { Colors } from '@/styles/theme'
import { TextInput, TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
  placeholder: string
}

export function Input({ placeholder, ...rest }: InputProps) {
  const borderColor = useThemeColor({}, 'border') as string
  const backgroundColor = useThemeColor({}, 'background') as string

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={Colors.gray._300}
      style={{
        borderWidth: 1,
        borderColor,
        borderRadius: 4,
        paddingHorizontal: 4,
        paddingVertical: 2,
      }}
      {...rest}
    />
  )
}