import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { size } from '@/constants/FontSize'
import { useThemeColor } from '@/hooks/useThemeColor'
import MarkerIcon from "@/assets/icons/marker.svg"
import FacebookIcon from "@/assets/icons/facebook.svg"
import InstagramIcon from "@/assets/icons/instagram.svg"
import ButtonComponent from '../ButtonComponent'

export default function Map() {
    const colors = useThemeColor()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emplacement & Réseaux sociaux</Text>
      <View style={{
        height: 156,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.tintRgba
      }} />
      <View style={styles.locationContainer}>
        <View style={styles.locationContent}>
            <MarkerIcon width={14} height={14} fill={colors.tint} />
            <Text style={{color: colors.text, fontSize: size.placeholder}}>{`${`Côte d'Ivoire, Abidjan, Cocody`.substring(0, 30)}${`Côte d'Ivoire, Abidjan, Cocody`.length > 10 ? '...' : ''}`}</Text>
        </View>
        <View style={styles.rsContainer}>
            <ButtonComponent
                style={[styles.rsButton ,{backgroundColor: colors.tintRgba}]}
            >
                <FacebookIcon width={size.iconInfo} height={size.iconInfo} fill={colors.text} />
            </ButtonComponent>
            <ButtonComponent
                style={[styles.rsButton ,{backgroundColor: colors.tintRgba}]}
            >
                <InstagramIcon width={size.iconInfo} height={size.iconInfo} fill={colors.text} />
            </ButtonComponent>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        gap: 15
    },
    title: {
        fontSize: size.text, 
        fontWeight: 'bold'
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    locationContent: {
        flexDirection: 'row',
        flex: 1,
        gap: 5,
        alignItems: 'center',
    },
    rsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    rsButton: {
        borderRadius: 50,
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
    }
})