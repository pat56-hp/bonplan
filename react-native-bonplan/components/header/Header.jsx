import { View, Text, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import ButtonComponent from '../ButtonComponent'
import MenuIcon from '@/assets/icons/icon-menu.svg'
import { size } from '@/constants/FontSize'
import UserImage from '../images/UserImage'
import Search from './Search'
import { useNavigation } from 'expo-router'

/**^
 * Composant entete de page
 * @param {string} title 
 * @param {bool} back 
 * @param {component} children 
 * @returns 
 */
export default function Header(){
    const colors = useThemeColor()
    const navigation = useNavigation()

  return (
    <View style={[styles.topCard, {backgroundColor: colors.tint}]}>
      <View style={styles.topMenu}>
        <View style={styles.container}>
          <View style={styles.userInfo}>
            <UserImage 
                imageAsset={require('@/assets/images/user.png')}
                style={styles.imageContainer}
            />
            <View style={styles.nameContainer}>
                <Text style={[styles.welcome, {color: colors.textDefault}]}>Bienvenue</Text>
                <Text style={[styles.userName, {color: colors.textDefault}]}>Patrick Kouassi</Text>
            </View>
          </View>
          <View style={styles.bouttonContainer}>
            <ButtonComponent
              style={{
                  backgroundColor: colors.menuButton,
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
            >
                <MenuIcon 
                  width={size.icon}
                  height={size.icon}
                  fill={colors.text}
                />
            </ButtonComponent>
          </View>
        </View>
      </View>
      <Search />
    </View>
  )
}

const styles = StyleSheet.create({
  topCard : {
    paddingTop: 70,
    paddingBottom: 20,
    paddingHorizontal: 18,
    gap: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topMenu: {
      gap: 35
  },
  container: {
    //paddingTop: 70,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  userInfo: {
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center'
  },
  imageContainer: {
      borderColor: '#A89C9EFF',
      height: 58,
      width: 58,
      borderRadius: 29,
  },
  nameContainer: {
      gap: 2
  },
  welcome:{
      fontSize: size.text
  },
  userName:{
      fontSize: size.text,
      fontWeight: 'bold'
  }
})