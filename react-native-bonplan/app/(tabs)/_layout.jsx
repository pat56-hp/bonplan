import { Tabs } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import BottomBarItem from "@/components/bottomBar/BottomBarItem";
import { useEffect } from "react";
import * as Font from 'expo-font';
import { StyleSheet } from "react-native";
import { size } from "@/constants/FontSize";
import Header from "@/components/header/Header";

export default function TabLayout(){
    const colors = useThemeColor()

    useEffect(() => {
        Font.loadAsync({
          'Lato-Regular': require('@/assets/fonts/Lato-Regular.ttf'),
        });
      }, []);

    return (
        <Tabs
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: colors.background,
                },
                headerShadowVisible: false,
                headerTitleStyle: styles.title,
                tabBarActiveTintColor: '#E04F67',
                tabBarActiveBackgroundColor: 'rgba(224, 79, 103, 0.1)',
                tabBarLabelPosition: 'beside-icon',
                tabBarIconStyle: {
                    display: 'none'    
                },
                tabBarItemStyle: {
                    borderRadius: 12,
                    padding: 12,
                    height: 48,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%'
                },
                tabBarStyle: { 
                    position: 'absolute',
                    paddingVertical: 15,
                    paddingHorizontal: 8,
                    backgroundColor: '#ffffff',
                    height: 75,
                    justifyContent: 'center',  // Centrer verticalement
                    alignItems: 'center', 
                },
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{ 
                    title: 'Accueil',
                    header: (() => <Header />),
                    headerTransparent: 'true',
                    tabBarLabel : ({ focused }) => (
                        <BottomBarItem focused={focused} menu={'accueil'} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="explore"
                options={{ 
                    title : 'Explorer',
                    headerShown: false,
                    tabBarLabel : ({ focused }) => (
                        <BottomBarItem focused={focused} menu={'explore'} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="favoris"
                options={{
                    title: 'Mes favoris',
                    tabBarLabel : ({ focused }) => (
                        <BottomBarItem focused={focused} menu={'favoris'} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="profil"
                options={{ 
                    title: 'Mon profil',
                    tabBarLabel : ({ focused }) => (
                        <BottomBarItem focused={focused} menu={'profil'} />
                    ),
                    href: '/auth/login'
                }}
            />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: size.headerTitle,
      textAlign: 'center',
      alignContent: 'center',
      fontWeight: '500'
    },
  })