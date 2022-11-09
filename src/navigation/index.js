import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";



import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Paginicial } from "../screens/Home";
import { Produtos } from "../screens/Produtos";
import { Sobre } from "../screens/Sobre";
import { Noticias, noticias } from "../screens/Notícias";
import { Contato, Login } from "../screens/Contato";

//const Stack = createNativeStackNavigator();
const MBNav = createMaterialBottomTabNavigator();

export const GPRootNavigation = () => {
  return (
<MBNav.Navigator activeColor="white" inactiveColor="white" barStyle={{ backgroundColor: "#01011F"}}>      
        <MBNav.Screen
        name="Home"
        component={Paginicial}
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
            <MaterialCommunityIcons name="clipboard-account" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Produtos"
        component={Produtos}
        options={{
          tabBarLabel: "Produtos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Noticias"
        component={Noticias}
        options={{
          tabBarLabel: "Notícias",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open-blank-variant" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Contato"
        component={Login}
        options={{
          tabBarLabel: "Contato",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }}
      />
     
    </MBNav.Navigator>
  );
};