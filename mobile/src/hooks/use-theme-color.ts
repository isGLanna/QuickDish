/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/styles/theme'
import { useAppTheme } from '@/contexts/theme-color'

export function useThemeColor(
  props: { light?: string; dark?: string },
    colorName: string
) {
  const { color: theme } = useAppTheme()
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return Colors[theme][colorName]
  }
}
