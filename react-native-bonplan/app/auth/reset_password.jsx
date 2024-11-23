import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { size } from '@/constants/FontSize'
import InputContent from '@/components/InputContent'
import Envelope from '@/assets/icons/envelope.svg';
import ButtonComponent from '@/components/ButtonComponent'
import PageComponent from '@/components/PageComponent'

/**
 * Screen mot de passe oublié
 */
export default function ResetPassword() {
  const colors = useThemeColor()
  return (
    <PageComponent style={{paddingTop: 40}}>
      {/* Contenu de la page */}
      <View style={styles.container}>
        <Text style={[styles.text, {color: colors.text}]}>Veuillez renseigner votre adresse email pour obtenir le lien de réinitialisation</Text>
        <InputContent placeholder={"Adresse email"}>
          <Envelope width={size.icon} height={size.icon} fill={colors.icon} />
        </InputContent>
       
       {/* Boutton d'envoi de lien de reinitialisation du mot de passe */}
       <ButtonComponent
        style={[{backgroundColor: colors.tint}]}
       >
        <Text style={styles.buttonTitle}>Obtenir le lien</Text>
       </ButtonComponent>
      </View>
    </PageComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 33
  },
  text: {
    fontSize: size.text,
    textAlign: 'center'
  },
  buttonTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: size.subtitle,
    fontWeight: 'bolt',
    textTransform: 'uppercase',
  }
})