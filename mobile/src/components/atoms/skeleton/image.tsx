import { Animated, Image, View, StyleSheet, type StyleProp, type ImageStyle } from 'react-native'
import { useThemeColor } from '@/hooks/use-theme-color';
import { useEffect, useState, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export function ImageSkeleton({ style }: { style?: StyleProp<ImageStyle> }) {
  const color = useThemeColor({}, 'skeleton') as string
  const animatedValue = useRef(new Animated.Value(0)).current
  const [ viewWidth, setViewWidth ] = useState(0);

  useEffect(() => {
    animatedValue.setValue(0)
    const animation = Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    )
    animation.start()
    return () => animation.stop()
  }, [animatedValue])

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-viewWidth, viewWidth],
  })

  return (
    <View onLayout={(e) => setViewWidth(e.nativeEvent.layout.width)}
      style={[{ backgroundColor: color[0], overflow: 'hidden' }, style]}>
      <Animated.View style={[StyleSheet.absoluteFillObject, { transform: [{ translateX }] }]}>
        <LinearGradient
          colors={['transparent', color[1], 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0}}
          style={StyleSheet.absoluteFillObject}/>
      </Animated.View>
    </View>
  )
}