import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { useThemeColor } from '@/hooks/use-theme-color';

interface TouchableProps extends TouchableOpacityProps {
  children: React.ReactNode
}

export function Touchable({ style, children, ...rest }: TouchableProps) {
  const backgroundColor = useThemeColor({}, 'container') as string
  const borderColor = useThemeColor({}, 'border') as string


  return (
    <TouchableOpacity
      style={[{ backgroundColor, borderColor, height: 60 }, style]}
      activeOpacity={0.7}
      {...rest}>
      {children}
    </TouchableOpacity>)
}