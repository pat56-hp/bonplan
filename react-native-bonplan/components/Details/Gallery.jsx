import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ButtonComponent from "../ButtonComponent";
import LeftIcon from "@/assets/icons/icon-left.svg";
import RightIcon from "@/assets/icons/icon-right.svg";
import { size } from "@/constants/FontSize";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Gallery() {
  const colors = useThemeColor();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/image2.png")}
          style={styles.image}
        />
        <View style={styles.buttons}>
          <ButtonComponent style={[styles.button, styles.button1]}>
            <LeftIcon width={size.icon} height={size.icon} fill={colors.text} />
          </ButtonComponent>
          <ButtonComponent style={[styles.button, styles.button2]}>
            <RightIcon
              width={size.icon}
              height={size.icon}
              fill={colors.text}
            />
          </ButtonComponent>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //position: 'relative',
  },
  imageContainer: {
    borderRadius: 15,
    height: 165,
    overflow: "hidden",
    backgroundColor: "#000000",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  buttons: {
    bottom: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  button: {
    backgroundColor: "rgba(253, 250, 245, 0.5)",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  button1: {
    left: 10,
  },
  button2: {
    right: 10,
  },
});
