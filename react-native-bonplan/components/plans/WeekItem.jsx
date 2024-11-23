import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { size } from '@/constants/FontSize'
import ButtonComponent from '@/components/ButtonComponent'
import HeartIcon from "@/assets/icons/heart.svg"
import BookmarkIcon from "@/assets/icons/bookmark.svg"
import MarkerIcon from "@/assets/icons/marker.svg"
import { useThemeColor } from '@/hooks/useThemeColor'
import Start from '../Start'
import { Link } from 'expo-router'

export default function WeekItem({style}) {
    const colors = useThemeColor()

  return (
    <View style={[style, styles.weekItem]}>
        <View style={styles.imageCard}>
            <Link href={{ pathname: '/pages/Details'}} asChild>
                <Pressable
                    android_ripple={{color: '#FDFAF5', borderless: false, foreground: true}}
                >
                    <Image
                        source={require('@/assets/images/image1.png')}
                        style={styles.imageWeek}
                    />
                </Pressable>
            </Link>
            <View style={styles.buttonContainer}>
                <View style={styles.itemWeekStatus}>
                    <Text style={[{color: colors.textDefault, fontSize: size.placeholder}]}>Fermé</Text>
                </View>
                <ButtonComponent
                    style={{
                    backgroundColor: colors.tintRgba,
                    height: 38,
                    width: 38,
                    alignItems: 'center',
                    borderRadius: 19
                    }}
                >
                    <HeartIcon width={size.icon} height={size.icon} fill={colors.tint} />
                </ButtonComponent>
            </View>
        </View>
        <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Le manawa café</Text>
            <View style={styles.itemStick}>
                <View style={styles.categoryContainer}>
                    <BookmarkIcon width={size.text} height={size.text} fill={colors.tint} />
                    <Text style={{color: colors.text, fontSize: size.text}}>Catégorie</Text>
                </View>
                <View style={styles.starContainer}>
                    <Start size={size.text} />
                </View>
            </View>
            <View style={styles.locationContainer}>
                <MarkerIcon width={size.text} height={size.text} fill={colors.tint} />
                <Text style={{color: colors.text, fontSize: size.text}}>Côte d'Ivoire, Abidjan, Cocody</Text>
            </View>
        </View>
        </View>
  )
}

const styles = StyleSheet.create({
    weekItem: {
        width: 272,
        height: 288,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 15,
        borderRadius: 20,
        gap: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        //shadowOffset: 1,
        shadowOffset: { width: 1, height: 1 },
        //shadowRadius: 5,
        shadowOpacity: 5,
        elevation: 5,
    },
    imageCard: {
        height: 170,
        overflow: 'hidden',
        position: 'relative'
    },
    imageWeek: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 15
    },
    buttonContainer:{
        position: 'absolute',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    itemWeekStatus: {
        width: 85,
        height: 30,
        backgroundColor: '#E04F67',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    itemContent: {
        paddingHorizontal: 6,
        gap: 10
    },
    itemTitle:{
        fontSize: size.text,
        fontWeight: '500',
    },
    itemStick:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    categoryContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    starContainer:{
        flexDirection: 'row',
        gap: 5
    },
    locationContainer:{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    }
})