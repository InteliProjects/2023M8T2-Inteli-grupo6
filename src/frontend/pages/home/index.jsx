import { View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  return (
    <View className="h-full">
      <View className="bg-white dark:bg-black h-full font-extrabold flex flex-col justify-evenly items-center">
        <View>
          <Text className="text-4xl mx-12 text-center text-[#E9344E]">
            Welcome to Chauffeur
          </Text>
        </View>
        <View className="flex justify-center items-center">
          <Image
            width={300}
            height={300}
            source={require("../../assets/chatbot-icon.png")}
          />
          <Text className="text-3xl text-center text-gray-600 dark:text-white">
            Chauffeur AI
          </Text>
        </View>
        <View>
          <Pressable
            color="#E9344E"
            className="text-4xl"
            onPress={() => navigation.navigate("ChatScreen")}
          >
            <Text className="bg-[#E9344E] text-white text-4xl p-4 rounded-2xl px-12 font-bold">
              Start Chat
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
