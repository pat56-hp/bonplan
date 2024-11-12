import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { size } from '@/constants/FontSize'
import VoirPlus from '@/components/VoirPlus'
import WeekItem from '@/components/plans/WeekItem'
import ButtonComponent from '@/components/ButtonComponent'
import { categories, items } from '@/constants/data'
import PlanItem from '@/components/plans/PlanItem'
import { useNavigation } from 'expo-router'

export default function Home() {
  const colors = useThemeColor()
  const navigation = useNavigation()

  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [categoryItems, setCategryItems] = useState([])
  
  useEffect(() => {
    setCategryItems(items.filter(item => item.category_id == selectedCategory))
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
  
  return (
    <>
      <SafeAreaView style={{ marginTop: 200,backgroundColor: colors.background, flex: 1}}>
        <ScrollView contentContainerStyle={{paddingTop: 20, paddingBottom: 70}} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.weekPlanContainer}>
              <View style={styles.weekPlanTitle}>
                <Text style={{color: colors.title, fontSize: size.text, fontWeight: '600', flex: 1}}>Les plans de la semaine</Text>
                <VoirPlus
                  color={colors.tint}
                  pathname={{pathname: '#'}}
                />
              </View>
              <FlatList
                style={{paddingVertical: 5}}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={['Item 1', 'Item 2', 'Item 3']}
                renderItem={({item}) => <WeekItem style={{ marginHorizontal: 10}} />}
              />
            </View>
            <View style={styles.planBycategoryContainer}>
              <View style={[styles.weekPlanTitle, {gap: 21}]}>
                <Text style={{color: colors.title, fontSize: size.text, fontWeight: '600', flex: 1}}>Les établissement par catégorie</Text>
                <VoirPlus
                  color={colors.tint}
                  pathname={{pathname: '#'}}
                />
              </View>
              <View style={styles.categoriesContainer}>
                <ScrollView contentContainerStyle={{paddingVertical: 5, paddingHorizontal: 5}} horizontal showsHorizontalScrollIndicator={false}>
                  {
                    categories.map((category, key) => (
                      <ButtonComponent 
                        key={key} 
                        style={[
                          styles.categoryButton,
                          {
                            backgroundColor: selectedCategory == category.id ? colors.tint : colors.textDefault, 
                          }]
                        }
                        onPress={() => setSelectedCategory(category.id)}
                      >
                        <Text style={[
                          styles.categoriesText,
                          {
                            color: selectedCategory == category.id ? colors.textDefault : colors.text,
                            fontWeight: 'bold'
                          }
                        ]}>{category.name}</Text>
                      </ButtonComponent>
                    ))
                  }
                </ScrollView>
                <View style={{gap: 8}}>
                  {showDataPerCategory()}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  topCard : {
    height: 360,
    paddingVertical: 70,
    paddingHorizontal: 18,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  topMenu: {
    gap: 35
  },
  container: {
    paddingVertical: 20,
    //marginTop: -145,
    width: '100%',
    gap: 45,
    zIndex: 99999999
  },
  weekPlanContainer: {
    gap: 18
  },
  weekPlanTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 18,
  },
  planBycategoryContainer:{
    gap: 20,
  },
  categoriesContainer:{
    paddingHorizontal: 18,
    gap: 20
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
    fontWeight: 'bold',
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
    gap: 5
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

