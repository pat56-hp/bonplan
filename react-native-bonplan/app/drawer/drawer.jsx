import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../(tabs)/index"; // Chemin vers ton composant Home
import CustomDrawerContent from "@/components/header/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
