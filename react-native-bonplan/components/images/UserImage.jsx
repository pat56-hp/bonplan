import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function UserImage({style, imageAsset}) {
  return (
    <View style={[styles.imageContainer, style]}>
        <Image 
            source={imageAsset}
            style={styles.userImage}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
        padding: 1,
        borderWidth: 1,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    userImage: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    },
})