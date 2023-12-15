import { Accelerometer } from 'expo-sensors'
import { useEffect, useState, useRef } from 'react'
import { Text, View, Animated, Dimensions } from 'react-native'
import { Button } from 'react-native-paper'

interface ShotBallProps {}

function round(n: number) {
  if (!n) {
    return 0
  }
  return Math.floor(n * 100) / 100
}

export function ShotBall(props: ShotBallProps) {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 })
  const moveAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
  const velocity = useRef({ x: 0, y: 0 }).current
  const { width, height } = Dimensions.get('window')

  useEffect(() => {
    _subscribe()
    return () => _unsubscribe()
  }, [])

  const resetGame = () => {
    velocity.x = 0
    velocity.y = 0
    moveAnim.setValue({ x: 0, y: 0 })
  }

  const _subscribe = () => {
    Accelerometer.setUpdateInterval(1000) // controls the interval of updates
    Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData)
      setTimeout(() => {
        velocity.x += accelerometerData.x
        velocity.y += accelerometerData.y

        // Bounce off edges
        if (moveAnim.x._value < 0 || moveAnim.x._value > width - 50) {
          velocity.x *= -0.7
        }
        if (moveAnim.y._value < 0 || moveAnim.y._value > height - 50) {
          velocity.y *= -0.7
        }

        Animated.spring(moveAnim, {
          toValue: {
            x: moveAnim.x._value + velocity.x * 100,
            y: moveAnim.y._value + velocity.y * 100,
          },
          useNativeDriver: false,
        }).start()
      }, 500) // delay of 500ms
    })
  }

  const _unsubscribe = () => {
    Accelerometer.removeAllListeners()
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Accelerometer:</Text>
      <Text>
        x: {round(data.x)} y: {round(data.y)} z: {round(data.z)}
      </Text>
      <Animated.View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'blue',
          },
          moveAnim.getLayout(),
        ]}
      />
      <Button onPress={() => resetGame()}>Start again</Button>
    </View>
  )
}
