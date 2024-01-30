import { View, ScrollView, Text } from "react-native";

export function SavedChat() {
  return (
    <View className="h-[100svh] bg-black text-white">
      <ScrollView>
        <Text className="text-2xl text-white">Aqui estão os saved chats!</Text>
      </ScrollView>
    </View>
  );
}
