import { Card, Text } from 'react-native-paper'

import React from 'react'
import { StyleSheet } from 'react-native'

interface Props {
  name: string
  conference: 'West' | 'East'
}

const TeamCard = ({ name, conference }: Props) => {
  return (
    <Card style={styles.card}>
      <Card.Title
        titleVariant="titleLarge"
        titleStyle={styles.cardTitle}
        title={name}
        subtitle={conference}
      />
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </Card>
  )
}

export default TeamCard

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 20,
    marginVertical: 20,
  },
  cardTitle: {
    fontWeight: 'bold',
  },
})
