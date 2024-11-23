import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PageComponent from "@/components/PageComponent";
import { size } from "@/constants/FontSize";
import { useThemeColor } from "@/hooks/useThemeColor";
import Search from "@/components/header/Search";
import { FlatList } from "react-native-gesture-handler";
import PlanByCategory from "@/components/plans/PlanByCategory";

export default function Explore() {
  const colors = useThemeColor();

  return (
    <PageComponent style={{ paddingVertical: 70 }}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: colors.text }]}>
          Retouvez les bons plans de divertissement prêt de chez vous
        </Text>
        <Search style={{ backgroundColor: colors.textDefault }} />
        <View style={{ padding: 4 }}>
          <PlanByCategory />
        </View>
      </View>
    </PageComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 55,
    gap: 15,
  },
  title: {
    fontSize: size.headerTitle,
    fontWeight: "500",
  },
});
