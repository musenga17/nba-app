import { ActivityIndicator, SegmentedButtons } from 'react-native-paper'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Team, useTeams } from '../hooks/useTeams'

import TeamCard from '../components/TeamCard'

export default function TeamsScreen() {
  const { data, isError, isLoading } = useTeams()
  const [dataFiltered, setDataFiltered] = useState<Team[] | null>()
  const [value, setValue] = React.useState('')

  const conferences = [
    {
      label: 'East',
      value: 'East',
    },
    {
      label: 'West',
      value: 'West',
    },
  ]

  const handleChangeConference = (val: string) => {
    setValue(val)
    const teamsFiltered = data?.filter((team) => team.conference === val)
    setDataFiltered(teamsFiltered)
  }

  if (isLoading) {
    return (
      <View style={styles.containerCenter}>
        <ActivityIndicator size="large" />
        <Text style={styles.loading}>Chargement des équipes</Text>
      </View>
    )
  }

  if (isError) {
    return (
      <>
        <Image
          source={{ uri: 'https://media.giphy.com/media/muUi39vx8gj2o/giphy.gif' }}
          style={{ width: '100%', height: 580 }}
        />
        <Text style={styles.error}>We encoutered an error </Text>
      </>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose your NBA team</Text>
      <SegmentedButtons
        value={value}
        onValueChange={handleChangeConference}
        buttons={[
          {
            value: 'East',
            label: 'East',
          },
          {
            value: 'West',
            label: 'West',
          },
        ]}
      />
      <FlatList
        data={dataFiltered || data}
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
    marginVertical: 20,
  },
  flatList: {
    marginHorizontal: 10,
  },
  containerCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loading: {
    color: 'blue',
    fontSize: 24,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: 24,
    textAlign: 'center',
  },
})
