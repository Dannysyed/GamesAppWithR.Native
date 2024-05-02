import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGamesScreen from './screens/StartGamesScreen';
import GameScreen from './screens/GameScreen';
import { Light_color } from './components/Colors';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GameStartScreen" component={DrawerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="Games">
      {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
      <Drawer.Screen name="Games" component={StartGamesScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
