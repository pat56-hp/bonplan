import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InputContent from '../InputContent'
import ButtonComponent from '../ButtonComponent'
import { size } from '@/constants/FontSize'
import { useThemeColor } from '@/hooks/useThemeColor'
import SearchIcon from '@/assets/icons/search.svg'
import FilterIcon from '@/assets/icons/filter.svg'

export default function Search({children, style}) {
    const colors = useThemeColor()
  return (
    <View style={[styles.searchMenu]}>
        <InputContent style={[styles.searchInput]} placeholder={'Retrouver un établissement'}>
            <SearchIcon width={size.icon} height={size.icon} fill={colors.text} />
        </InputContent>
        <ButtonComponent style={[styles.filterButton, style?.borderColor, {backgroundColor: style?.backgroundColor ?? colors.menuButton,}]}>
            <FilterIcon width={size.icon} height={size.icon} fill={colors.text} />
        </ButtonComponent>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    searchMenu:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
        //marginHorizontal: 30,
    },
    filterButton: {
        padding: 16,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E8E8E8',
        borderWidth: 1
    },
    searchInput: {
        flexGrow: 1
    }
})