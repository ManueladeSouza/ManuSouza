import { NavigationContainer } from "@react-navigation/native";
import { GPRootNavigation } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <GPRootNavigation />
    </NavigationContainer>
  );
}