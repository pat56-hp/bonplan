import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PageComponent({style, children}) {
    const colors = useThemeColor()
    
  return (
    <SafeAreaView
        edges={'top'} 
        style={[style, styles.container, {backgroundColor: colors.background}]}>
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{paddingTop: 20, paddingBottom: 70}} showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container : {
        flex: 1,
        paddingBottom: 10,
        paddingHorizontal: 18,
    },
    scrollContent: {
        flexGrow: 1,
    }
})
