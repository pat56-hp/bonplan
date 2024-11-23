import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import PageComponent from "@/components/PageComponent";
import PlanItem from "@/components/plans/PlanItem";
import { size } from "@/constants/FontSize";
import { useThemeColor } from "@/hooks/useThemeColor";
import EmptyElement from "@/assets/images/empty1.svg";

export default function Favoris() {
  const colors = useThemeColor();
  const data = {
    name: "Le manawa café",
    id: 1,
  };
  return (
    <>
      <PageComponent style={{ paddingTop: 0 }}>
        <View style={styles.container}>
          {Array.from({ length: 10 }).map((item, key) => (
            <PlanItem item={data} key={key} isFavorite={true} />
          ))}
        </View>
      </PageComponent>

      {/* <SafeAreaView style={[styles.emptyContainer, {backgroundColor: colors.background}]}>
        <EmptyElement width={'100%'} height={200} />
        <Text style={[styles.emptyTitle, {color: colors.text}]}>Aucun établissement disponible dans les favoris</Text>
      </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    padding: 4,
  },
  emptyContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    //paddingVertical: 70,
    paddingHorizontal: 18,
  },
  image: {
    width: "auto",
    height: "150",
  },
  emptyTitle: {
    fontSize: size.subtitle,
    textAlign: "center",
  },
});
