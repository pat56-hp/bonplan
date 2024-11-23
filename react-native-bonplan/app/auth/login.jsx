import { View, Text, StyleSheet, Switch, Image, Pressable, Alert, ActivityIndicator } from 'react-native'
import React, { useRef, useState } from 'react'
import { useForm, Controller } from "react-hook-form"
import { useThemeColor } from '@/hooks/useThemeColor'
import { size } from '@/constants/FontSize'
import InputContent from '@/components/InputContent'
import Envelope from '@/assets/icons/envelope.svg';
import Lock from '@/assets/icons/lock.svg';
import Eye from '@/assets/icons/eye.svg';
import LowEye from '@/assets/icons/low-eye.svg';
import { Link, useNavigation } from 'expo-router'
import ButtonComponent from '@/components/ButtonComponent'
import PageComponent from '@/components/PageComponent'
import { loginUser } from '@/controllers/authController'
import Toast from 'react-native-toast-message'
import { useAuthStateContext } from '@/contexts/AuthContextProvider'

/**
 * Screen page de connexion
 * @returns 
 */
export default function Login() {
  const colors = useThemeColor()
  const navigation = useNavigation()
  const [isCached, setIsCached] = useState(true)
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState([])
  const {setToken, setUser} = useAuthStateContext()

  const {
    control, 
    handleSubmit, 
    reset,
    formState: {errors}
  } = useForm()

  //Active ou inactive se souvenir de moi
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  //Cache et affiche le mot de passe
  const toggleSecureText = () => setIsCached(!isCached)

  //Soumission du formulaire
  const onSubmit = (data) => {
    setLoading(true)
    setFormError(null)
    loginUser(data)
      .then(data => {
        const token = data.access_token
        const user = data.user
        setToken(token)
        setUser(user)
        reset()
        setLoading(false)
        navigation.reset({
          index: 0,
          routes: [{name: '(tabs)'}]
        })
      })
      .catch(err => {
        const response = err.response
        if (err.status === 422) {
          const errors = response.data
          Object.keys(errors).map(key => {
            setFormError(prevFormError => (
              {...prevFormError, [key]: errors[key]}
            ))
          })
        }else if(err.status === 406){
          const error = response.message
          console.log(error)
          Toast.show({
            type: 'error',
            text1: 'Oups 🤯',
            text2: error
          })
        }

        setLoading(false)
      })
  }

  return (
    <PageComponent style={{paddingTop: 90}}>
      <View style = {styles.pageContent}>
        <Text style={[styles.pageTitle, {color: colors.title}]}>Connexion</Text>
        <Text style={[styles.text, {color: colors.text}]}>Renseignez vos informations de connexion</Text>
        {/* Formulaire */}
        
        <View style={styles.form}>
          <View style={styles.formElement}>
            <Controller 
              control={control}
              rules={{required: true}}
              name="email"
              render={({field: {onChange, value}}) => (
                <InputContent 
                  style={{
                    width: '100%', 
                    borderColor: (errors?.email || formError?.email) && colors.tint,
                  }} 
                  placeholder="Adresse email" 
                  onSet={onChange}
                  value={value}
                >
                  <Envelope width={size.icon} height={size.icon} fill={colors.icon} />
                </InputContent>
              )}
            />
            {(errors.email || formError?.email)  && <Text style={{color: colors.tint, fontSize: size.text}}>{errors.email ? 'Adresse email obligatoire' : formError?.email}</Text>}
          </View>
          <View style={styles.formElement}>
            <Controller 
              control={control}
              rules={{required: true}}
              name="password"
              render={({field: {onChange, value}}) => (
                <InputContent 
                  placeholder="Mot de passe" 
                  onSet={onChange}
                  value={value}
                  secureText = {isCached}
                  style={{ 
                    width: '100%', 
                    position: 'relative', 
                    borderColor: (errors.password || formError?.password) && colors.tint
                  }}
                >
                  <Lock width={size.icon} height={size.icon} fill={colors.icon} />
                  <Pressable onPress={toggleSecureText} style={styles.eye}>
                    {isCached
                      ? <LowEye width={size.icon} height={size.icon} fill={colors.icon} />
                      : <Eye width={size.icon} height={size.icon} fill={colors.icon} />
                    }
                  </Pressable>
                </InputContent>
              )}
            />
            {(errors.password || formError?.password)  && <Text style={{color: colors.tint, fontSize: size.text}}>{errors.password ? 'Mot de passe obligatoire' : formError?.password}</Text>}
          </View>
          <View style={styles.buttonContent}>
            <View style = {styles.resetOrRemember}>
              <Switch
                trackColor={{false: '#CACBCDFF', true: colors.tint}}
                thumbColor="#ffffff"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.remember}
              />
              <Link href={'/auth/reset_password'}>
                <Text style={[styles.reset, {color: colors.tint}]}>Mot de passe oublié ?</Text>
              </Link>
            </View>

            {/* Click sur le bouton de connexion */}
            <ButtonComponent
              onPress={handleSubmit(onSubmit)}
              style={{backgroundColor: colors.tint}}
            >
              {
                loading 
                  ? <ActivityIndicator size={size.headerIcon} color={colors.textDefault} />
                  : <Text style={styles.connexion}>Se connecter</Text>
              }
            </ButtonComponent>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.dividerContent}>
          <View style={styles.divider}/>
          <Text style={[styles.textDivider, {color: colors.text}]}>ou continuer avec</Text>
          <View style={styles.divider}/>
        </View>

        {/* Bouttons de connexion via RS */}
        <View style={styles.rs}>
          <ButtonComponent style={{flex: 1, backgroundColor: colors.facebook}}>
            <Image
              source={require('@/assets/images/facebook.png')}
              style={styles.image}
            />
            <Text style={styles.rsText}>Facebook</Text>
          </ButtonComponent>
          <ButtonComponent style={{flex: 1,backgroundColor: colors.google}}>
            <Image
              source={require('@/assets/images/google.png')}
              style={styles.image}
            />
            <Text style={styles.rsText}>Googole</Text>
          </ButtonComponent>
        </View>

        {/* Text inscription */}
        <Text style={[styles.textSpan, {color: colors.text}]}>Pas encore inscrit ?
          <Link href={'/auth/sign_up'}>
            <Text style={[styles.log, {color: colors.tint}]}> Inscrivez-vous</Text>
          </Link> 
        </Text>
      </View>
    </PageComponent>
  )
}

const styles = StyleSheet.create({
  pageContent: {
    alignItems: 'center', 
    gap: 40,
    
  },
  pageTitle: {
    fontSize: size.title,
  },
  text: {
    fontSize: size.subtitle,
    textAlign: 'center',
  },
  form: {
    gap: 18
  },
  formElement: {
    width: '100%',
    gap: 5
  },
  inputComponent: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12,
    backgroundColor: '#ffffff'
  },
  textInput: {
    flex: 1,
    fontSize: size.text,
  },
  buttonContent: {
    gap: 30
  },
  resetOrRemember: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  remember: {
    height: 24,
    transform: [{ scale: 1.0 }]
  },
  reset: {
    fontSize: size.text,
  },
  connexion: {
    color: 'white',
    textAlign: 'center',
    fontSize: size.subtitle,
    fontWeight: 'bolt',
    textTransform: 'uppercase',
  },
  dividerContent :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider:{
    backgroundColor: '#6A6A6A',
    width: '100%',
    flex: 1,
    height: 0.5
  },
  textDivider: {
    marginHorizontal: 12,
    fontSize: size.placeholder
  },
  rs: {
    flexDirection: 'row',
    gap: 10
  },
  rsText: {
    fontSize: size.placeholder,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  textSpan: {
    fontSize: size.placeholder,
  },
  log: {
    fontWeight: 'bold',
    fontSize: size.text
  },
  image: {
    width: size.icon,
    height: size.icon
  },
  eye: {
    position: 'absolute',
    right: 25,
    zIndex: 1, 
  },
})