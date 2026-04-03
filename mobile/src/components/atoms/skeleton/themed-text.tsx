import { StyleSheet, View, Animated, type ViewProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { useRef, useEffect, useState } from 'react';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'defaultRegular' | 'subtitle' | 'link';
};

export function ThemedTextSkeleton({
  style,
  lightColor,
  darkColor,
  type = 'default'
}: ThemedTextProps) {
  const color = useThemeColor({}, 'skeleton') as string;

  const animatedValue = useRef(new Animated.Value(0)).current;
  const [ viewWidth, setViewWidth ] = useState(0);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      })
    )

    animation.start()
    return () => animation.stop()
  }, [animatedValue]);

  // Interpolação do gradiente
  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-viewWidth, viewWidth],
  })

  return (
    <View
      onLayout={(e) => {setViewWidth(e.nativeEvent.layout.width)}}
      style={[
        { backgroundColor: color, overflow: 'hidden', borderRadius: 4 },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'defaultRegular' ? styles.defaultRegular : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
    >
      {viewWidth > 0 && (
        <Animated.View style={[ StyleSheet.absoluteFillObject ,{transform: [{ translateX }]} ]}>
          <LinearGradient
            colors={['transparent', 'rgba(255,255,255,0.5)', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0}}
            style={StyleSheet.absoluteFillObject}
          />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    height: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    height: 16,
    lineHeight: 24,
  },
  defaultRegular: {
    height: 14,
    lineHeight: 24,
  },
  title: {
    height: 24,
    lineHeight: 32,
  },
  subtitle: {
    height: 18,
  },
  link: {
    height: 16,
    lineHeight: 30,
    color: '#0a7ea4',
  },
});
