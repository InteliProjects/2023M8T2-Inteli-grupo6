import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function Loading() {
  return (
    <View className="w-full flex items-center justify-center h-min mt-3">
      <View className="flex rounded-lg border items-center flex-row justify-evenly w-1/2 h-12 border-neutral-200">
        <FontAwesome name="square" size={30} color="#E9344E" />
        <Text className="text-lg font-medium leading-tight">Generating...</Text>
      </View>
    </View>
  );
}
