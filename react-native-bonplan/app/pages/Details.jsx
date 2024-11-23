import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack, useNavigation } from "expo-router";
import { SheetManager } from "react-native-actions-sheet";
import ButtonComponent from "@/components/ButtonComponent";
import LeftIcon from "@/assets/icons/icon-left.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import { size } from "@/constants/FontSize";

export default function Details() {
  const colors = useThemeColor();
  const navigation = useNavigation();

  useEffect(() => {
    SheetManager.show("detailPlanSheet", {
      payload: { plan: {} },
    });
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      />
      <View style={[styles.imageContainer]}>
        <ButtonComponent
          style={[
            styles.button,
            styles.leftButton,
            { backgroundColor: colors.detailToIcon },
          ]}
          onPress={() => {
            navigation.goBack();
            SheetManager.hide("detailPlanSheet");
          }}
        >
          <LeftIcon width={size.icon} height={size.icon} fill={colors.text} />
        </ButtonComponent>
        <ButtonComponent
          style={[
            styles.button,
            styles.rightButton,
            { backgroundColor: colors.tintRgba },
          ]}
        >
          <HeartIcon width={size.icon} height={size.icon} fill={colors.tint} />
        </ButtonComponent>
        <Image
          source={require("@/assets/images/image1.png")}
          style={styles.image}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 350,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 50,
    zIndex: 999999,
  },
  leftButton: {
    left: 20,
    borderRadius: 8,
  },
  rightButton: {
    borderRadius: 19,
    right: 20,
  },
});
