import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Team, useTeams } from '../hooks/useTeams'

import React from 'react'
import TeamCard from '../components/TeamCard'

export default function TeamsScreen() {
  const { data, isError, isLoading } = useTeams()

  if (isError) {
    return <Text></Text>
  }

  console.log('🚀 ~ file: TeamsScreen.tsx:9 ~ TeamsScreen ~ data:', data)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose your NBA team</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TeamCard key={item.id} name={item.name} conference={item.conference} />
        )}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        style={styles.flatList}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e7f4fecd',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flatList: {
    marginHorizontal: 4,
  },
  error: {
    color: 'red',
  },
})
