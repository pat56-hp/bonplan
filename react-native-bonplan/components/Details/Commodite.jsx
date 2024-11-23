import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { size } from "@/constants/FontSize";
import BookmarkIcon from "@/assets/icons/bookmark.svg";

export default function Commodite() {
  const colors = useThemeColor();
  const days = [
    { day: "Lundi", hour: "00:00" },
    { day: "Mardi", hour: "00:00" },
    { day: "Mercredi", hour: "00:00" },
    { day: "Jeudi", hour: "00:00" },
    { day: "Vendredi", hour: "00:00" },
    { day: "Samedi", hour: "00:00" },
    { day: "Dimanche", hour: "00:00" },
  ];
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.element}>
        <Text style={styles.title}>Commodités</Text>
        <View style={styles.commoditeContent}>
          <View style={styles.commodite}>
            <BookmarkIcon width={14} height={14} fill={colors.tint} />
            <Text style={{ color: colors.text, fontSize: size.placeholder }}>
              Catégorie
            </Text>
          </View>
          <View style={styles.commodite}>
            <BookmarkIcon width={14} height={14} fill={colors.tint} />
            <Text style={{ color: colors.text, fontSize: size.placeholder }}>
              Catégorie
            </Text>
          </View>
          <View style={styles.commodite}>
            <BookmarkIcon width={14} height={14} fill={colors.tint} />
            <Text style={{ color: colors.text, fontSize: size.placeholder }}>
              Catégorie
            </Text>
          </View>
          <View style={styles.commodite}>
            <BookmarkIcon width={14} height={14} fill={colors.tint} />
            <Text style={{ color: colors.text, fontSize: size.placeholder }}>
              Catégorie
            </Text>
          </View>
          <View style={styles.commodite}>
            <BookmarkIcon width={14} height={14} fill={colors.tint} />
            <Text style={{ color: colors.text, fontSize: size.placeholder }}>
              Catégorie
            </Text>
          </View>
          <View style={styles.commodite}>
            <BookmarkIcon width={14} height={14} fill={colors.tint} />
            <Text style={{ color: colors.text, fontSize: size.placeholder }}>
              Catégorie
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.element}>
        <Text style={styles.title}>Horaires</Text>
        <View style={styles.hoursContent}>
          {days.map((day, key) => (
            <View style={styles.hours} key={key}>
              <Text style={[styles.hourDay, { color: colors.text }]}>
                {day.day}
              </Text>
              <Text style={[styles.hour, { color: "#338A26" }]}>
                {day.hour}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    gap: 25,
    padding: 15,
  },
  element: {
    gap: 15,
  },
  title: {
    fontSize: size.text,
    fontWeight: "bold",
  },
  commoditeContent: {
    gap: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  commodite: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  hoursContent: {
    gap: 5,
  },
  hours: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hourDay: {
    fontSize: size.placeholder,
  },
  hour: {
    fontSize: size.placeholder,
  },
});
