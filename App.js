import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGamesScreen from './screens/StartGamesScreen';
import GameScreen from './screens/GameScreen';
import { Light_color, Primary_color, Secondary_color, calming } from './components/Colors';
import { Ionicons } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: calming.primary, // Set your desired background color here
  },
};

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App() {
  return (

    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: calming.secondary,
          borderBottomColor: 'white',
        },
      }}>
        <Stack.Screen name="GameStartScreen" component={DrawerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerScreen() {
  return (
    <Tab.Navigator initialRouteName="Games" tabBarOptions={{
      activeTintColor: calming.secondary,
      inactiveTintColor: 'gray',
    }} screenOptions={{
      headerRight: () => {
        return <Ionicons name="help" color={calming.secondary} size={25} />
      }, headerStyle: {
        backgroundColor: calming.secondary,
        borderBottomColor: 'white',
      },

      headerTintColor: 'white',
    }} >
      <Tab.Screen name="Games" component={StartGamesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Misc" component={HomeScreen} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name="settings" color={focused ? calming.secondary : 'gray'} size={size} />
        )
      }} />
    </Tab.Navigator>
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
