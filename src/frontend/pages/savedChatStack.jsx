import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Chat } from "./chat";
import { SavedChat } from "./savedChat";

const Stack = createNativeStackNavigator();

export function SavedChatStack() {
  return (
    <Stack.Navigator
      initialRouteName="SavedChat"
      screenOptions={() => ({
        headerBackVisible: false,
        title: "",
      })}
    >
      <Stack.Screen
        name="SavedChat"
        component={SavedChat}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
