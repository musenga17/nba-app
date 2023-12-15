import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { Routes } from "./Routes"
import TeamsScreen from "../screens/TeamsScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ShotScreen } from "../screens/ShotScreen"

const Stack = createNativeStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.TEAMS_SCREEN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Routes.TEAMS_SCREEN} component={TeamsScreen} />
        <Stack.Screen name={Routes.SHOT_SCREEN} component={ShotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
