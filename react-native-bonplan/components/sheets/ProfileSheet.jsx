import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import ActionSheet from 'react-native-actions-sheet';
import React, { useEffect, useRef, useState } from 'react'
import { size } from '@/constants/FontSize';
import { useThemeColor } from '@/hooks/useThemeColor';
import InputContent from '@/components/InputContent'
import UserIcon from '@/assets/icons/user.svg';
import ButtonComponent from '@/components/ButtonComponent'
import LocationIcon from '@/assets/icons/marker.svg';

export default function ProfileSheet(props) {
  const colors = useThemeColor()
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const timeOutRef = useRef(null)

  useEffect(() => {
    timeOutRef.current = setTimeout(() => {
      setUser(props.payload?.user)
      setLoading(false)
    }, 800)
  }, [props, timeOutRef.current])

  return (
    <ActionSheet 
      id={props.sheetId}
      snapPoints={[100, 700]}
      gestureEnabled
      drawUnderStatusBar
      indicatorStyle={{
        width: 100,
        marginVertical: 20
    }}>
      <View style={styles.container}>
            <Text style={[styles.title, {color: colors.text}]}>Modifier mes informations personnelles</Text>
            {
              loading ? <View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator color={colors.tint} /></View>
              :
              <View style={styles.formComponent}>
                <View style={styles.inputComponent}>
                  <InputContent value={user?.name} placeholder={"Nom"}>
                    <UserIcon width={size.icon} height={size.icon} fill={colors.icon} />
                  </InputContent>
                  <InputContent value={user?.lastname} placeholder={"Prénom(s)"}>
                    <UserIcon width={size.icon} height={size.icon} fill={colors.icon} />
                  </InputContent>
                  <InputContent value={user?.phone} placeholder={"Contact"}>
                    <UserIcon width={size.icon} height={size.icon} fill={colors.icon} />
                  </InputContent>
                  <InputContent value={user?.location} placeholder={"Localisation"}>
                    <LocationIcon width={size.icon} height={size.icon} fill={colors.icon} />
                  </InputContent>
                </View>
              </View>

            } 
      </View>
        <ButtonComponent
          style={{
            backgroundColor: colors.tint,
            marginHorizontal: 18,
            marginVertical: 15
          }}
        >
          <Text style={{color: colors.textDefault, fontSize: size.headerTitle, textTransform: 'uppercase'}}>Enregistrer</Text>
        </ButtonComponent>
    </ActionSheet>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    paddingHorizontal: 20
  },
  title: {
    fontSize: size.subtitle,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  formComponent: {
    marginTop: 40,
    justifyContent: 'space-between',
  },
  inputComponent: {
    gap: 18
  }
})