import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'

import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'

import { SearchBar } from '@/components/molecules/search-bar'
import { CategoryCard, Card } from '@/components/organisms/home/index'
import { categories, popularItems, recommendedItems } from '@/api/food'
import { useState, useCallback } from 'react'


export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const collumns = Dimensions.get('window').width > 500 ? Math.floor(Dimensions.get('window').width / 175) : 2
  const [filters, setFilters] = useState<string[]>([])

  /* Método deve ser trocado por uma consulta oa backend */
  const handlerFilterItems = useCallback((query: string) => {
    setFilters(prev => {
      if (prev.includes(query)) {
        return prev.filter(filter => filter !== query)
      }
      return [...prev, query]
    })
  }, [])

  const renderHeader = () => (
    <View>
      {/* HEADER */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* CATEGORIES */}
      <View style={styles.section}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CategoryCard item={item} handleFilter={handlerFilterItems} />}
          />
      </View>

      {/* POPULAR ITEMS */}

      <View style={styles.section}>
        <ThemedText style={styles.title}>Mais populares</ThemedText>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={popularItems.filter(item => filters.length === 0 || filters.includes(item.category))}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Card item={item} />}
          style={styles.gridItems}
          />
      </View>

      <ThemedText style={styles.title}>Sugestões de pedidos</ThemedText>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={recommendedItems.filter(item => filters.length === 0 || filters.includes(item.category))}
        keyExtractor={item => item.id.toString()}
        numColumns={collumns}
        renderItem={({item}) => <Card item={item} />}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={ styles.gridItems }
        contentContainerStyle={{ paddingBottom: 32 }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },

  section: {
    marginBottom: 16,
  },

  gridItems: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 4,
  },

  title: {
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    alignSelf: 'flex-start',
    fontWeight: '400',
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginBottom: 4,
    borderRadius: 100,
    boxShadow: '0 4px 4px rgba(0,0,0,0.1)',
  }
})