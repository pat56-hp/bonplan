import { StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function ButtonComponent({style, children, ...rest}) {
  return (
    <Pressable
      android_ripple={{color: '#FDFAF5', borderless: false, foreground: true}} 
        style={[
          styles.button,
          { paddingVertical: style?.paddingVertical ?? 14 },
          { borderRadius: style?.borderRadius ?? 15},
          style
        ]}
      {...rest}
    >
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        //borderRadius: 15,
        flexDirection: 'row',
        gap: 10,
        padding: 12,
        borderRadius: 15,
    },
})

