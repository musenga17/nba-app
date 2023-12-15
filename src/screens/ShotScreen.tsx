import { Text, View } from 'react-native'
import { ShotBall } from '../components/ShotBall'

interface ShotScreenProps {}

export function ShotScreen(props: ShotScreenProps) {
  return (
    <View style={{flex: 1}}>
      <ShotBall />
    </View>
  )
}
