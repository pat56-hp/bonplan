import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { size } from '@/constants/FontSize'

export default function InputContent({
  placeholder, 
  onSet,
  secureText = false, 
  style, 
  value,
  children,
}) {
    const colors = useThemeColor()

  return (
    <View style = {[styles.inputComponent, style, {borderColor: style?.borderColor ?? '#E8E8E8'}]}>
        {children}
        <TextInput
          onChangeText={onSet}
          style={[styles.textInput, {color: colors.text}]}
          placeholder={placeholder}
          placeholderTextColor={{fontSize: size.placeholder, color: colors.placeholder}}
          secureTextEntry={secureText}
          cursorColor={colors.text}
          defaultValue={value}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    inputComponent: {
      //width: 'auto',
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      gap: 12,
      borderWidth: 1,
      borderRadius: 12,
      backgroundColor: '#ffffff',
      //flexGrow: 1
    },
    textInput: {
      flex: 1,
      fontSize: size.text,
    },
  })