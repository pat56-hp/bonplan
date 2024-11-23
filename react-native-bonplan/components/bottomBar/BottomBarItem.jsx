import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import HomeIcon from "@/assets/icons/home.svg";
import HomeActiveIcon from "@/assets/icons/home-active.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import HeartActiveIcon from "@/assets/icons/heart-active.svg";
import SearchIcon from "@/assets/icons/search.svg";
import SearchActiveIcon from "@/assets/icons/search-active.svg";
import UserIcon from "@/assets/icons/user.svg";
import UserActiveIcon from "@/assets/icons/user-active.svg";
import { size } from "@/constants/FontSize";

export default function BottomBarItem({ menu, focused }) {
  const colors = useThemeColor();

  const home = (focused) => {
    return focused ? (
      <>
        <HomeActiveIcon width={20} height={20} fill={colors.tint} />
        <Text style={styles.label}>Accueil</Text>
      </>
    ) : (
      <HomeIcon width={size.icon} height={size.icon} fill={colors.text} />
    );
  };

  const explore = (focused) => {
    return focused ? (
      <>
        <SearchActiveIcon width={20} height={20} fill={colors.tint} />
        <Text style={styles.label}>Explorer</Text>
      </>
    ) : (
      <SearchIcon width={size.icon} height={size.icon} fill={colors.text} />
    );
  };

  const favoris = (focused) => {
    return focused ? (
      <>
        <HeartActiveIcon width={20} height={20} fill={colors.tint} />
        <Text style={styles.label}>Favoris</Text>
      </>
    ) : (
      <HeartIcon width={size.icon} height={size.icon} fill={colors.text} />
    );
  };

  const profil = (focused) => {
    return focused ? (
      <>
        <UserActiveIcon width={20} height={20} fill={colors.tint} />
        <Text style={styles.label}>Profil</Text>
      </>
    ) : (
      <UserIcon width={size.icon} height={size.icon} fill={colors.text} />
    );
  };

  const getLabelMenu = (menu, focused) => {
    switch (menu) {
      case "explore":
        return explore(focused);
        break;

      case "favoris":
        return favoris(focused);
        break;

      case "profil":
        return profil(focused);
        break;

      default:
        return home(focused);
        break;
    }
  };

  return (
    <View style={styles.itemContainer}>{getLabelMenu(menu, focused)}</View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#E04F67",
    textAlign: "center",
    flexGrow: 1 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
