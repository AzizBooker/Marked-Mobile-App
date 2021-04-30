import React from 'react'


import {createDrawerNavigator } from '@react-navigation/drawer'
import  HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'


export default function RootNavigator() {
    const Drawer=createDrawerNavigator()
  return (
      <NavigationContainer >
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    </NavigationContainer >
  );
}