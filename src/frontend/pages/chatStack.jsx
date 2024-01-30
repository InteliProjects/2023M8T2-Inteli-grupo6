import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./home";
import { Chat } from "./chat";

const Stack = createNativeStackNavigator();

export function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        title: "Chauffeur",
      })}
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ChatScreen" component={Chat} />
    </Stack.Navigator>
  );
}
