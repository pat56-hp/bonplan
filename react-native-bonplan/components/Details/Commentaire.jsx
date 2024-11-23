import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { size } from "@/constants/FontSize";
import { useThemeColor } from "@/hooks/useThemeColor";
import UserImage from "../images/UserImage";
import Start from "../Start";
import RightIcon from "@/assets/icons/icon-right.svg";

export default function Commentaire() {
  const colors = useThemeColor();
  return (
    <View style={styles.container}>
      <View style={styles.titleContent}>
        <Text style={styles.title}>Avis et commentaires</Text>
        <Text style={[styles.avis, { color: colors.tint }]}>
          Ajouter un avis
        </Text>
      </View>
      {Array.from({ length: 2 }).map((_, i) => (
        <View style={[styles.avisItem, { backgroundColor: colors.background }]}>
          <UserImage
            imageAsset={require("@/assets/images/user.png")}
            style={[styles.imageContainer, { borderColor: colors.tint }]}
          />
          <View style={styles.avisContent} key={i}>
            <View style={styles.avisTitle}>
              <Text style={[styles.avisName, { color: colors.text }]}>
                Kouassi Patrick A.
              </Text>
              <Text style={[styles.avisText, { color: colors.text }]}>
                10/01/2024
              </Text>
            </View>
            <Start size={size.smallIcon} />
            <Text style={[styles.avisText, { color: colors.text }]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
          </View>
        </View>
      ))}

      <View style={styles.avisOther}>
        <Text style={[styles.avis, { color: colors.tint }]}>Voir plus</Text>
        <RightIcon width={size.icon} height={size.icon} fill={colors.tint} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  titleContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: size.text,
    fontWeight: "bold",
  },
  avis: {
    fontSize: size.text,
    fontWeight: "bold",
  },
  avisItem: {
    padding: 12,
    flexDirection: "row",
    flex: 1,
    borderRadius: 12,
    gap: 20,
  },
  imageContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  avisContent: {
    gap: 8,
  },
  avisTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avisName: {
    fontSize: size.text,
    fontWeight: "bold",
  },
  avisText: {
    fontSize: size.text,
  },
  avisOther: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
