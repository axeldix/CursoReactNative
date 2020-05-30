import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function ScreenUno({ navigation }) {
  return (
    <View style={styles.container}>
      <Text onPress={ () => navigation.navigate("Screen-Dos")}>Pantalla Uno</Text>
    </View>
  );
}

function ScreenDos({ navigation }) {
  return (
    <View style={styles.container}>
      <Text onPress={ () => navigation.navigate("Screen-Uno") }>Pantalla Dos</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen-Uno" component={ScreenUno} />
        <Stack.Screen name="Screen-Dos" component={ScreenDos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
