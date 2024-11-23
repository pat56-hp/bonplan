import { View, Text, StyleSheet } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor'
import { size } from '@/constants/FontSize'
import BookmarkIcon from "@/assets/icons/bookmark.svg"
import MarkerIcon from "@/assets/icons/marker.svg"
import Start from '../Start'
import ButtonComponent from '../ButtonComponent'
import Envelope from '@/assets/icons/envelope.svg';
import PhoneIcon from '@/assets/icons/phone.svg';

export default function HeadInfo() {
    const colors = useThemeColor()

  return (
    <View style={styles.head}>
        <View style={styles.titleContent}>
            <Text style={styles.title}>Le Manawa Café</Text>
            <View style={styles.itemWeekStatus}>
                <Text style={[{color: colors.textDefault, fontSize: size.placeholder}]}>Fermé</Text>
            </View>
        </View>
        <View style={styles.categoryLocation}>
            <View style={styles.categoryContainer}>
                <BookmarkIcon width={14} height={14} fill={colors.tint} />
                <Text style={{color: colors.text, fontSize: size.placeholder}}>Catégorie</Text>
            </View>
            <View style={styles.locationContainer}>
                <MarkerIcon width={14} height={14} fill={colors.tint} />
                <Text style={{color: colors.text, fontSize: size.placeholder}}>{`${`Côte d'Ivoire, Abidjan, Cocody`.substring(0, 20)}${`Côte d'Ivoire, Abidjan, Cocody`.length > 10 ? '...' : ''}`}</Text>
            </View>
        </View>
        <View style={styles.itemStatusNote}>
            <View style={styles.starContainer}>
                <Text style={{fontSize: size.text}}>0.0</Text>
                <Start size={15} />
            </View>
            <View style={styles.rsContainer}>
                <ButtonComponent
                    style={[styles.rsButton ,{backgroundColor: colors.tintRgba}]}
                >
                    <Envelope width={size.iconInfo} height={size.iconInfo} fill={colors.text} />
                </ButtonComponent>
                <ButtonComponent
                    style={[styles.rsButton ,{backgroundColor: colors.tintRgba}]}
                >
                    <PhoneIcon width={size.iconInfo} height={size.iconInfo} fill={colors.text} />
                </ButtonComponent>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    titleContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: size.text, 
        fontWeight: 'bold'
    },
    itemWeekStatus: {
        width: 85,
        height: 30,
        backgroundColor: '#E04F67',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    categoryLocation: {
        flexDirection: 'row',
        gap: 20
    },
    categoryContainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    locationContainer: {
        flexDirection: 'row',
        flex: 1,
        gap: 5,
        alignItems: 'center',
    },
    itemStatusNote: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    starContainer: {
        flexDirection: 'row',
        gap: 10,
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