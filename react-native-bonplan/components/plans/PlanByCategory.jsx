import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categories, items } from '@/constants/data'
import { useThemeColor } from '@/hooks/useThemeColor'
import ButtonComponent from '../ButtonComponent'
import { size } from '@/constants/FontSize'
import PlanItem from './PlanItem'

export default function PlanByCategory() {
    const colors = useThemeColor()
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [categoryItems, setCategryItems] = useState([])
    
    useEffect(() => {
        const filterItems = selectedCategory === 0
            ? items
            : items.filter(item => item.category_id == selectedCategory)
        setCategryItems(filterItems)
    }, [selectedCategory, items])

    {/* Afficher les items par categorie */}
    const showDataPerCategory = () => {
        if (categoryItems.length > 0) {
            return categoryItems.map((item, key) => <PlanItem key={key} item={item} />)
        }else{
            return (
                <View style={styles.categoryItem}>
                    <Text style={{color: colors.text, textAlign: 'center', fontWeight: 'bold', fontSize: size.headerTitle}}>Aucun établissement trouvé</Text>
                </View>
            )
        }
    }

    const buttonCategory = (name, id, key) => {
        return (
            <ButtonComponent 
                key={key} 
                style={[
                    styles.categoryButton,
                    {
                        backgroundColor: selectedCategory == id ? colors.tint : colors.textDefault, 
                    }]
                }
                onPress={() => setSelectedCategory(id)}
            >
            <Text style={[
                styles.categoriesText,
                {
                    color: selectedCategory == id ? colors.textDefault : colors.text,
                    fontWeight: 'bold'
                }
            ]}>{name}</Text>
        </ButtonComponent>
        )
    }

  return (
    <View style={styles.categoriesContainer}>
        <ScrollView contentContainerStyle={{paddingVertical: 5, paddingHorizontal: 5}} horizontal showsHorizontalScrollIndicator={false}>
            {buttonCategory('Tout', 0, 0)}
            {
                categories.map((category, key) => {
                    return buttonCategory(
                        category.name, category.id, key
                    )
                })
            }
        </ScrollView>
        <View style={{gap: 8}}>
            {showDataPerCategory()}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    categoriesContainer:{
        gap: 30
    },
    categoryButton:{
        borderRadius: 100, 
        marginRight: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: 1,
        shadowOpacity: 4,
        elevation: 4,
    },
    categoriesText: {
        fontSize: size.text,
        textAlign: 'center'
    },
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
    },
})