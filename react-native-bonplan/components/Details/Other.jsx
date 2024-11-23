import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { size } from '@/constants/FontSize'
import PlanItem from '../plans/PlanItem'

export default function Other() {
    const data = {
        name: 'Le manawa café', 
        id: 1
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Autre(s) plan(s)</Text>
      <View style={styles.itemContainer}>
        {
            Array.from({length: 4}).map((_, i) => <PlanItem key={i} item={data} />)
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        gap: 15,
        
    },
    title:{
        fontSize: size.text,
        fontWeight: 'bold'
    },
    itemContainer: {
        padding: 4,
        gap: 8
    }
})