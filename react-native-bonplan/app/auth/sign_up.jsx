import { View, Text, SafeAreaView, StyleSheet, Button, Pressable, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { size } from '@/constants/FontSize'
import InputContent from '@/components/InputContent'
import Envelope from '@/assets/icons/envelope.svg';
import Lock from '@/assets/icons/lock.svg';
import Eye from '@/assets/icons/eye.svg';
import UserIcon from '@/assets/icons/user.svg';
import LowEye from '@/assets/icons/low-eye.svg';
import ButtonComponent from '@/components/ButtonComponent'
import PageComponent from '@/components/PageComponent'
import { Link } from 'expo-router'

/**
 * Screen mot de passe oublié
 */
export default function SignUp() {
  const colors = useThemeColor()

  const [isCached, setIsCached] = useState(true)
  const [isCachedConfirm, setIsCachedConfirm] = useState(true)

  //Active ou inactive se souvenir de moi
  const toggleSecureText = () => setIsCached(!isCached);
  const toggleSecureConfirm = () => setIsCachedConfirm(!isCachedConfirm);

  return (
    <PageComponent style={{paddingTop: 40}}>
      {/* Contenu de la page */}
      <View style={styles.container}>
        <Text style={[styles.text, {color: colors.text}]}>Inscrivez-vous en remplissant tous les champs</Text>
        
        {/* Inputs Container */}
        <View style={styles.inputContainer}>
          <InputContent placeholder={"Nom"}>
            <UserIcon width={size.icon} height={size.icon} fill={colors.icon} />
          </InputContent>
          <InputContent placeholder={"Prénom(s)"}>
            <UserIcon width={size.icon} height={size.icon} fill={colors.icon} />
          </InputContent>
          <InputContent placeholder={"Adresse email"}>
            <Envelope width={size.icon} height={size.icon} fill={colors.icon} />
          </InputContent>
          <InputContent 
            placeholder="Mot de passe" 
            secureText = {isCached}
            style={{ position: 'relative' }}
          >
            <Lock width={size.icon} height={size.icon} fill={colors.icon} />
            <Pressable onPress={toggleSecureText} style={styles.eye}>
              {isCached
                ? <LowEye width={size.icon} height={size.icon} fill={colors.icon} />
                : <Eye width={size.icon} height={size.icon} fill={colors.icon} />
              }
            </Pressable>
          </InputContent>
          <InputContent 
            placeholder="Confirmation du mot de passe" 
            secureText = {isCachedConfirm}
            style={{ position: 'relative' }}
          >
            <Lock width={size.icon} height={size.icon} fill={colors.icon} />
            <Pressable onPress={toggleSecureConfirm} style={styles.eye}>
              {isCachedConfirm
                ? <LowEye width={size.icon} height={size.icon} fill={colors.icon} />
                : <Eye width={size.icon} height={size.icon} fill={colors.icon} />
              }
            </Pressable>
          </InputContent>
        </View>
       
       {/* Boutton d'envoi de lien de reinitialisation du mot de passe */}
       <ButtonComponent
        style={[{backgroundColor: colors.tint}]}
       >
        <Text style={styles.buttonTitle}>Obtenir le lien</Text>
       </ButtonComponent>
       {/* Text inscription */}
       <Text style={[styles.textSpan, {color: colors.text}]}>Déjà un compte ?
          <Link href={'/auth/login'}>
            <Text style={[styles.log, {color: colors.tint}]}> Connectez-vous</Text>
          </Link> 
        </Text>
      </View>
    </PageComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
  text: {
    fontSize: size.subtitle,
    textAlign: 'center'
  },
  inputContainer: {
    gap: 18
  },
  buttonTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: size.subtitle,
    fontWeight: 'bolt',
    textTransform: 'uppercase',
  },
  eye: {
    position: 'absolute',
    right: 25,
    zIndex: 1, 
  },
  textSpan:{
    textAlign: 'center',
    fontSize: size.placeholder
  },
  log:{
    fontWeight: 'bold',
    fontSize: size.text
  }
})