import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { ChatStack } from "./pages/chatStack";
import { SapStack } from "./pages/sapStack";
import { SavedChatStack } from "./pages/savedChatStack";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: "#F4F4F4",
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: "#E9344E",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="robot-love-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SAP"
        component={SapStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="store-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedChatStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="pin-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
