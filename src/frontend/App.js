import { Routes } from "./routes";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from "./context/context";

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes />
        </GestureHandlerRootView>
      </ContextProvider>
    </NavigationContainer>
  );
}
