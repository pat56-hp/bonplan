import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export  function useThemeColor() {
  const theme = useColorScheme() ?? 'light'
  return Colors[theme]
}