import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import CreatePostScreen from './Screens/CreatePostScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{title:'Overview'}}></Stack.Screen>
        <Stack.Screen name='Details' component={DetailsScreen}></Stack.Screen>      
        <Stack.Screen name='Post' component={CreatePostScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}