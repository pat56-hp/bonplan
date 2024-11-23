import { View, Text, DrawerLayoutAndroid } from 'react-native'
import React from 'react'
import Home from '@/app/(tabs)'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export default function DrawerLayout() {
    
  return (
    <Drawer.Navigator 
      initialRouteName='Home'
    >
      <Drawer.Screen name='Home' component={Home} />
    </Drawer.Navigator>
  )
}