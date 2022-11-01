import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/Home";
import { Sobre } from "../screens/Sobre";
import { Album } from "../screens/Album";
import { Notícias } from "../screens/Sobre";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// // Simboliza a instância do Stack
// const Stack = createNativeStackNavigator();
// Simboliza a instância do Stack
const MBNav = createMaterialBottomTabNavigator();

// Componente base
export const MSRootNavigation = () => {
  return (
    <MBNav.Navigator activeColor="#fff" inactiveColor="rgba(255,255,255,0.5)">
      <MBNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: "Sobre",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Albuns lançados"
        component={Album}
        options={{
          tabBarLabel: "Albuns Lançados",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Notícias"
        component={Newspaper}
        options={{
          tabBarLabel: "Notícias",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="android" color={color} size={26} />
          ),
        }}
      />
    </MBNav.Navigator>
  );
};
