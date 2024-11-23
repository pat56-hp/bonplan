import StarIcon from "@/assets/icons/star.svg"
import { useThemeColor } from "@/hooks/useThemeColor"
import React from 'react'
import { View } from "react-native"

export default function Start({size}) {
  const colors = useThemeColor()
  return (
    <View style={{flexDirection: 'row', gap: 3}}>
        <StarIcon width={size} height={size} fill={colors.text} />
        <StarIcon width={size} height={size} fill={colors.text} />
        <StarIcon width={size} height={size} fill={colors.text} />
        <StarIcon width={size} height={size} fill={colors.text} />
        <StarIcon width={size} height={size} fill={colors.text} />
    </View>
  )
}