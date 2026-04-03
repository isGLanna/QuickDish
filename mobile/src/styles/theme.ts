/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintLight = '#e0b011'
const tintDark = '#e0b011'

export const Colors = {
  light: {
    text: '#222',
    background: '#f7e8d2',
    tint: tintLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintLight,
    container: '#f9f9f9',
    border: '#ddd',
    skeleton: ['#00000010', '#00000020'],
  },
  dark: {
    text: '#ECEDEE',
    background: '#262626',
    tint: tintDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintDark,
    container: '#463e39',
    border: '#eba947',
    skeleton: ['#ffffff10', '#ffffff30'],
  },

  red: {
    _300: '#fca5a5',
    _400: '#f87171',
    _500: '#ef4444',
    _600: '#dc2626',
    _700: '#b91c1c',
  },

  green: {
    _300: '#86efac',
    _500: '#22c55e',
    _700: '#15803d',
  },

  blue: {
    _300: '#93c5fd',
    _400: '#60a5fa',
    _500: '#3b82f6',
    _600: '#2563eb',
    _700: '#1e40af',
  },

  yellow: {
    _300: '#fde68a',
    _500: '#f59e0b',
    _700: '#b45309',
  },

  gray: {
    _300: '#d1d5db',
    _500: '#6b7280',
    _700: '#374151',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
