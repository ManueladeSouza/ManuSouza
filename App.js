import { NavigationContainer } from "@react-navigation/native";
import { MSRootNavigation } from "./src/navigation/";

export default function App() {
  return (
    <NavigationContainer>
      <MSRootNavigation />
    </NavigationContainer>
  );
}
