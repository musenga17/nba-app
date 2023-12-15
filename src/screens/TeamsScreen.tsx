import { Image, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Team, useTeams } from '../hooks/useTeams'

import React from 'react'
import TeamCard from '../components/TeamCard'

export default function TeamsScreen() {
  const { data, isError, isLoading } = useTeams()

  if (isLoading) {
    return (
      <>
        <Text style={styles.title}>Loading...</Text>
      </>
    )
  }

  if (isError) {
    return (
      <>
        <Image source={{uri: "https://media.giphy.com/media/muUi39vx8gj2o/giphy.gif"}} style={{width: "100%", height: 580}}/>
        <Text style={styles.error}>We encoutered an error </Text>
      </>
    )
  }

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
    fontSize: 24,
    textAlign: 'center',
  },
})
