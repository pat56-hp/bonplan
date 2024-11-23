// app/(tabs)/DrawerLayout.jsx
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabLayout from "./_layout"; // Votre layout d'onglet
import Home from ".";

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <Drawer.Navigator initialRouteName="(tabs)">
      <Drawer.Screen name="(tabs)" component={TabLayout} />
      {/* Ajoutez d'autres écrans ici si nécessaire */}
    </Drawer.Navigator>
  );
}
