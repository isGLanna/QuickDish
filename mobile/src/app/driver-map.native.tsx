import { StyleSheet, View } from 'react-native'

export default function DriverMap() {
  return (
    <View style={styles.container}>
      <View style={styles.map} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
