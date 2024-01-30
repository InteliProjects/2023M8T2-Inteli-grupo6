import axios from "axios";
import { View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { baseURL } from "../../api/baseURL";

export function InputSection({ change }) {
  const [newMessage, setNewMessage] = useState("");

  const onChangeText = (msg) => {
    setNewMessage(msg);
  };

  const sendMessage = async () => {
    console.log("Enviando para a API");

    if (newMessage.length <= 1) {
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/chat`, {
        message: newMessage,
        user: "me",
        chat: "1",
      });

      if (response.status === 200) {
        setNewMessage("");
        change(true);
      } else {
        throw new Error("An error has occurred");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <View className="w-full flex flex-row items-center justify-evenly h-min my-4">
      <View className="shadow-lg bg-white shadow-slate-800 rounded-xl flex flex-row justify-between p-1 w-[75vw]">
        <TextInput
          className="text-center items-center text-xl ml-2 "
          placeholder="Ask me anything..."
          placeholderTextColor="gray"
          value={newMessage}
          onChangeText={onChangeText}
        />
        <Ionicons name="mic" size={40} color="#E9344E" />
      </View>
      <Pressable onPress={() => sendMessage()}>
        <Ionicons
          className="w-[10vw]"
          name="send-sharp"
          size={40}
          color="#E9344E"
        />
      </Pressable>
    </View>
  );
}
