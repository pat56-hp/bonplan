import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import BookmarkIcon from "@/assets/icons/bookmark.svg"
import MarkerIcon from "@/assets/icons/marker.svg"
import HeartActive from "@/assets/icons/heart-active.svg"
import { size } from '@/constants/FontSize'
import Start from '../Start'
import ButtonComponent from '../ButtonComponent'

export default function PlanItem({item, isFavorite = false}) {
    const colors = useThemeColor()

  return (
    <View style={styles.categoryItem}>
        <View style={styles.imageContent}>
            <Image source={require('@/assets/images/image2.png')} style={styles.image}/>
        </View>
        <View style={styles.itemContent}>
            <View style={styles.itemInfo}>
                <Text style={[
                    styles.itemTitle,
                    {color: colors.title}
                ]}>{item.name}</Text>
                <View style={styles.categoryContainer}>
                    <BookmarkIcon width={14} height={14} fill={colors.tint} />
                    <Text style={{color: colors.text, fontSize: size.placeholder}}>Catégorie</Text>
                </View>
                <View style={styles.locationContainer}>
                    <MarkerIcon width={14} height={14} fill={colors.tint} />
                    <Text style={{color: colors.text, fontSize: size.placeholder}}>{`${`Côte d'Ivoire, Abidjan, Cocody`.substring(0, 15)}${`Côte d'Ivoire, Abidjan, Cocody`.length > 10 ? '...' : ''}`}</Text>
                </View>
            </View>
            <View style={styles.itemStatusNote}>
                <View style={styles.starContainer}>
                    {
                      isFavorite
                      ? <ButtonComponent>
                          <HeartActive width={18} height={18} fill={colors.tint}/>
                        </ButtonComponent>
                    : <Start size={14} />
                    }
                    
                </View>
                <View style={styles.itemWeekStatus}>
                    <Text style={[{color: colors.textDefault, fontSize: size.placeholder}]}>Fermé</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    categoryItem: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: 87,
        borderRadius: 20,
        gap: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 5,
        elevation: 5,
        

    },
    imageContent:{
      width: 82,
      height: 68,
      borderRadius: 15,
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    itemContent:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },
    itemInfo: {
      justifyContent: 'space-between',
    },
    itemTitle: {
      fontSize: size.text,
      fontWeight: '500',
    },
    categoryContainer: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center'
    },
    locationContainer:{
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center'
    },
    starContainer:{
      flexDirection: 'row',
      gap: 5,
      justifyContent: 'flex-end',
    },
    itemStatusNote: {
      justifyContent: 'space-between'
    },
    itemWeekStatus: {
      width: 85,
      height: 30,
      backgroundColor: '#E04F67',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12
    },
  })
  
  