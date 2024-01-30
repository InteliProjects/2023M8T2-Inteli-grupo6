import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { SapHome } from "./SapHome";
import { SapItems } from "./SapItems";
import { SapRequest } from "./SapRequest";

const Stack = createNativeStackNavigator();

export function SapStack() {
  const navigation = useNavigation();
  const navigate = (to) => {
    navigation.navigate(to);
  };

  return (
    <Stack.Navigator
      initialRouteName="SapScreen"
      screenOptions={{
        headerBackVisible: true,
        title: "SAP",
        headerTitleAlign: "center",
        headerTitleStyle: {
          textAlign: "center",
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigate("Request")}>
            <MaterialCommunityIcons name="cart" size={30} color="#E9344E" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="SapScreen" component={SapHome} />
      <Stack.Screen name="ItemScreen" component={SapItems} />
      <Stack.Screen name="Request" component={SapRequest} />
    </Stack.Navigator>
  );
}
