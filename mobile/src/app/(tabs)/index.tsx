import { View, FlatList, StyleSheet, Dimensions } from 'react-native'

import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'
import { ThemedFlatList } from '@/components/themed-flatlist'

import { SearchBar } from '@/components/molecules/search-bar'
import { CategoryCard, Card } from '@/components/organisms/home/index'
import { categories, popularItems, restaurants, recommendedItems } from '@/api/food'
import { useState, useCallback } from 'react'


export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filters, setFilters] = useState<string[]>([])
  const collumns = Dimensions.get('window').width > 500 ? Math.floor(Dimensions.get('window').width / 175) : 2
  const firstLine = 0
  const lastLine = useCallback(() => {
    return Math.ceil(recommendedItems.length / collumns) - 1
  }, [])

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
        <ThemedFlatList
          horizontal
          style={{ backgroundColor: 'transparent' }}
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CategoryCard item={item} handleFilter={handlerFilterItems} />}
          />
      </View>

      {/* POPULAR ITEMS */}

      <View style={styles.section}>
        <ThemedText style={styles.title} darkColor='#222'>Mais populares</ThemedText>
        <ThemedFlatList
          horizontal
          style={ styles.gridItems }
          showsHorizontalScrollIndicator={false}
          data={popularItems.filter(item => filters.length === 0 || filters.includes(item.category))}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Card item={item} />}
          />
      </View>

      {/* RESTAURANTS */}
      <View style={ styles.section }>
        <ThemedText style={styles.title} darkColor='#222'>Restaurantes</ThemedText>
        <ThemedFlatList
          horizontal
          style={ styles.gridItems }
          showsHorizontalScrollIndicator={false}
          data={restaurants}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Card item={item}/>}
          />
      </View>

      <ThemedText style={styles.title} darkColor='#222'>Sugestões de pedidos</ThemedText>
    </View>
  )

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={recommendedItems.filter(item => filters.length === 0 || filters.includes(item.category))}
        keyExtractor={item => item.id.toString()}
        numColumns={collumns}
        renderItem={({item}) => <Card item={item} />}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={[ styles.gridItems ]}
        contentContainerStyle={{ paddingBottom: 32 }}
        />
    </ThemedView>
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
    backgroundColor: '#e40e0e',
    borderRadius: 15,
  },

  uniqueLine: {
    borderRadius: 50,
    backgroundColor: '#fd0000',
  },

  firstLine: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  lastLine: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
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