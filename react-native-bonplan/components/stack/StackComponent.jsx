import React, { useEffect } from 'react'
import { Stack, useNavigation } from 'expo-router'
import ArrowLeft from '@/assets/icons/icon-left.svg'
import { Pressable, StyleSheet } from 'react-native';
import { size } from '@/constants/FontSize';
import * as Font from 'expo-font';
import { useThemeColor } from '@/hooks/useThemeColor';


export default function StackComponent({children}) {
    const colors = useThemeColor()
  const navigation = useNavigation()

  useEffect(() => {
    Font.loadAsync({
      'Lato-Regular': require('@/assets/fonts/Lato-Regular.ttf'),
    });
  }, []);

  return (
    <Stack
    screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft 
              width={28} 
              height={28} 
              fill={colors.title} 
            />
          </Pressable>
        ),
        headerTitleStyle: styles.title
      }}
    >
        {children}
    </Stack>
  )
}

const styles = StyleSheet.create({
    title: {
      fontSize: size.headerTitle,
      textAlign: 'center',
      alignContent: 'center',
      flex: 1,
      fontWeight: '500'
    }
  })