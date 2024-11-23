import { View, StyleSheet, Text, BackHandler, SafeAreaView } from 'react-native'
import React, { useCallback } from 'react'
import ActionSheet, { useSheetRef, ScrollView } from 'react-native-actions-sheet'
import { useThemeColor } from '@/hooks/useThemeColor'
import HeadInfo from '../Details/HeadInfo'
import Map from '../Details/Map'
import ButtonComponent from '../ButtonComponent'
import SignaleIcon from "@/assets/icons/signal.svg"
import ShareIcon from "@/assets/icons/share.svg"
import { size } from '@/constants/FontSize'
import Gallery from '../Details/Gallery'
import { useFocusEffect, useNavigation } from 'expo-router'
import Commodite from '../Details/Commodite'
import Commentaire from '../Details/Commentaire'
import Other from '../Details/Other'

export default function DetailPlanSheet() {
    const colors = useThemeColor()
    const ref = useSheetRef('detailPlanSheet')
    const navigation = useNavigation()

    useFocusEffect(
        useCallback(() => {
        const onBackPress = () => {
            ref.current.hide(true)
            navigation.goBack();
            return true;
        };

        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [ref, navigation])
      )

  return (
    <ActionSheet
        ref={ref}
        enableGesturesInScrollView={false}
        isModal={false}
        backgroundInteractionEnabled
        snapPoints={[70, 100]}
        gestureEnabled={true}
        closable={false}
        closeOnTouchBackdrop={false}
        disableDragBeyondMinimumSnapPoint={false}
        containerStyle={styles.sheetContainer}
        indicatorStyle={styles.sheetIndicator}
        ExtraOverlayComponent={<BottomComponent />}
        statusBarTranslucent={false}
    >
        <SafeAreaView edges={'top'} >
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={{gap: 30}}>
                    <HeadInfo />
                    <Map />
                    <Gallery />
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descTitle}>Description</Text>
                        <Text style={[styles.descText, {color: colors.placeholder}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed dui a felis aliquet consectetur at id augue. Duis gravida massa ut finibus pharetra. Etiam vestibulum erat erat, vitae tincidunt lorem imperdiet eget. In condimentum tellus sit amet odio egestas, quis</Text>
                    </View>
                    <Commodite/>
                    <Commentaire />
                    <Other />
                </View>
            </ScrollView>
        </SafeAreaView>
    </ActionSheet>
  )
}

function BottomComponent(){
    const colors = useThemeColor()

    return (
        <View style={[styles.buttons, {borderTopColor: colors.tintRgba, backgroundColor: colors.textDefault}]}>
            <ButtonComponent
                style={[styles.button ,{backgroundColor: colors.tintRgba}]}
            >
                <ShareIcon width={size.icon} height={size.icon} fill={colors.text}/>
            </ButtonComponent>
            <ButtonComponent
                style={[styles.button ,{backgroundColor: colors.tint, flexGrow: 1}]}
            >
                <SignaleIcon width={size.icon} height={size.icon} fill={colors.textDefault}/>
                <Text style={[styles.buttonText, {color: colors.textDefault}]}>Signaler</Text>
            </ButtonComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    sheetContainer: {
        paddingHorizontal: 18,
        paddingTop: 20,
        height: 600,
        margin: 0
    },
    sheetIndicator: {
        width: 100,
    },
    container: {
        marginVertical: 10,
        flexShrink: 1,
        zIndex: 9999999
    },
    buttons: {
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 18,
        paddingHorizontal: 18,
        borderTopWidth: 0.4,
        margin: 0
    },
    button:{
        borderRadius: 15,
        paddingHorizontal: 18,
        paddingVertical:12,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    buttonText:{
        fontSize: size.subtitle,
        textTransform: 'uppercase'
    },
    descriptionContainer: {
        gap: 15
    },
    descTitle: {
        fontSize: size.text,
        fontWeight: 'bold'
    },
    descText: {
        fontSize: size.text,
    }
})