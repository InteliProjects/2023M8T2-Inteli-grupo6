import { View, ScrollView, Text, Image } from "react-native";

function UserMessage({ message }) {
  return (
    <View className="flex items-end">
      <Text className="bg-red-500 w-[60vw] p-3 mr-3 rounded-tl-lg rounded-tr-lg rounded-bl-lg text-white text-base">
        {message}
      </Text>
    </View>
  );
}

function ChauffeurMessage({ message }) {
  return (
    <View className="flex items-start">
      <Text className="bg-slate-200 w-[60vw] p-3 ml-3 rounded-tl-lg rounded-tr-lg rounded-br-lg text-black text-base">
        {message}
      </Text>
    </View>
  );
}

export function TalkSection({ messages }) {
  return (
    <ScrollView className=" h-4/6 flex gap-4">
      <View className="flex justify-center items-center mb-4">
        <Image
          width={300}
          height={300}
          source={require("../../assets/chatbot-icon.png")}
        />
        <Text className="text-3xl text-center text-gray-600 dark:text-white">
          Chauffeur AI
        </Text>
      </View>
      {messages.map((msg, idx) => (
        <View key={idx}>
          {msg.user == "chat" ? (
            <ChauffeurMessage message={msg.message} />
          ) : (
            <UserMessage message={msg.message} />
          )}
        </View>
      ))}
    </ScrollView>
  );
}
