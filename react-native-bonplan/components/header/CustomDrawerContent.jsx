import React from "react";
import { View, Text, Button } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ padding: 16 }}>
        <Text>Options supplémentaires</Text>
        <Button
          title="Explorer"
          onPress={() => props.navigation.navigate("explore")}
        />
        <Button
          title="Favoris"
          onPress={() => props.navigation.navigate("favoris")}
        />
        <Button
          title="Profil"
          onPress={() => props.navigation.navigate("profil")}
        />
      </View>
    </DrawerContentScrollView>
  );
}
