import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import HomeKidWear from './src/screens/HomeKidWear';
import HomeToys from './src/screens/HomeToys';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeKidWear" component={HomeKidWear} />
        <Stack.Screen name="HomeToys" component={HomeToys} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
