import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { size } from '@/constants/FontSize'
import IconRight from '@/assets/icons/icon-right.svg'

export default function VoirPlus({color, pathname}) {

  return (
    <Link href={pathname} asChild>
        <Pressable
            android_ripple={{color: '#FDFAF5', borderless: false, foreground: true}}
        >
        <View style={ styles.buttonPlus }>
            <Text style={[{color : color}, styles.text]}>Voir tout</Text>
            <IconRight width={size.icon} height={size.icon} fill={color} />
        </View>
        </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
    buttonPlus: {
        flexDirection: 'row',
        gap: 3
    },
    text: {
        fontSize: size.text,
        fontWeight: '500'
    }
})