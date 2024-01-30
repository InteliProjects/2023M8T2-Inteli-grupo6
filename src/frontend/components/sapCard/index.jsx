import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const COLORS = [
  {
    background: "bg-rose-100",
    foreground: "bg-red-300",
  },
  {
    background: "bg-cyan-50",
    foreground: "bg-sky-300",
  },
];

export function SapCard({ data, idx }) {
  const navigation = useNavigation();

  const toggleNavigate = () => {
    navigation.navigate("ItemScreen");
  };
  return (
    <Pressable
      onPress={() => toggleNavigate()}
      className={`${
        COLORS[idx % COLORS.length].background
      } rounded-2xl w-44 mx-4 h-[25vh] flex justify-start items-start border-r-8 border-b-4`}
    >
      <View className="flex justify-around my-6 w-full items-center flex-row">
        <View
          className={`${
            COLORS[idx % COLORS.length].foreground
          } p-1 flex rounded-2xl justify-around`}
        >
          <MaterialCommunityIcons name={data.icon} size={60} color="black" />
        </View>
        <View></View>
      </View>
      <View className="flex w-full items-start">
        <Text className="ml-2 text-xl font-semibold">{data.title}</Text>
        <Text className="ml-2 text-xs font-medium h-fit text-neutral-400">
          {data.description}
        </Text>
      </View>
    </Pressable>
  );
}
