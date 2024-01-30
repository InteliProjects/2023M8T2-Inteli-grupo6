import { View, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export function OptionsSection({ lastMessage }) {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(lastMessage);
  };
  return (
    <View className="w-full flex flex-row items-center justify-center h-min mt-3">
      <View className="shadow-lg bg-white shadow-slate-800 rounded-xl flex flex-row justify-evenly items-center p-1 gap-x-4 w-[50vw]">
        <Pressable onPress={copyToClipboard}>
          <Ionicons name="copy" size={30} color="#E9344E" />
        </Pressable>
        <AntDesign name="like2" size={30} color="#E9344E" />
        <AntDesign name="dislike2" size={30} color="#E9344E" />
        <Ionicons name="reload" size={30} color="#E9344E" />
      </View>
    </View>
  );
}
