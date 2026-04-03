import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { useThemeColor } from '@/hooks/use-theme-color';

interface TouchableProps extends TouchableOpacityProps {
  children: React.ReactNode
}

export function Touchable({ style, children, ...rest }: TouchableProps) {
  const containerColor = useThemeColor({}, 'container') as string
  const borderThemeColor = useThemeColor({}, 'border') as string


  return (
    <TouchableOpacity
      style={[style, { backgroundColor: containerColor, borderColor: borderThemeColor, height: 60 }]}
      activeOpacity={0.7}
      {...rest}>
      {children}
    </TouchableOpacity>)
}