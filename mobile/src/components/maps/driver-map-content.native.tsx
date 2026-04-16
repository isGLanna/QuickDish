import { StyleSheet, View } from 'react-native'
import Map from '@rnmapbox/maps'

Map.setAccessToken(process.env.MAPS_API_KEY || '')

export default function DriverMapContent() {
  return (
    <View style={styles.container}>
      <Map.MapView styleURL={Map.StyleURL.Street} style={styles.map}>
        <Map.Camera
          zoomLevel={14}
          centerCoordinate={[-46.256, -19.194]}
          animationMode={'flyTo'}
          animationDuration={0}
        />
      </Map.MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})
