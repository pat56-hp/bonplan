import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { size } from '@/constants/FontSize'
import VoirPlus from '@/components/VoirPlus'
import WeekItem from '@/components/plans/WeekItem'
import PlanItem from '@/components/plans/PlanItem'
import { useNavigation } from 'expo-router'
import PlanByCategory from '@/components/plans/PlanByCategory'
import { useAuthStateContext } from '@/contexts/AuthContextProvider'

export default function Home() {
  const colors = useThemeColor()
  const navigation = useNavigation()
  
  return (
    <>
      <SafeAreaView style={{ marginTop: 200, backgroundColor: colors.background, flex: 1}}>
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
              <View style={{ paddingHorizontal: 18}}>
                <PlanByCategory />
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

