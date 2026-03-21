import { View, TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <View  style={styles.searchBar}>
      <TextInput
        placeholder="Qual seu pedido hoje?"
        style={styles.input}
        underlineColorAndroid="transparent"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#fff',
    maxWidth: 720,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    margin: 8,
    outlineStyle: 'solid',
    outlineColor: '#ccc',
    outlineWidth: 1,
  },

  input:{
    flex: 1,
    borderWidth: 0,
    color: '#222',
  },
})