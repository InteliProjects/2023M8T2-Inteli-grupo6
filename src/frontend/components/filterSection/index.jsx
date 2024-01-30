import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SapScrollCards } from "../SapScrollCards";

export function FilterSection({ data }) {
  return (
    <View className="w-full flex flex-col items-center justify-evenly h-min my-2">
      <View className="flex justify-between flex-row w-full">
        <Text className="ml-5 text-2xl font-medium">{data.title}</Text>
        <View className="mr-5 flex justify-center">
          <Ionicons name="arrow-forward" size={30} color="#E9344E" />
        </View>
      </View>
      <View className="ml-4">
        <SapScrollCards data={data.data} />
      </View>
    </View>
  );
}
