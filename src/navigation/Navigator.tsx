import { StyleSheet, Text, View } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { Routes } from "./Routes"
import TeamsScreen from "../screens/TeamsScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.TEAMS_SCREEN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Routes.TEAMS_SCREEN} component={TeamsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
