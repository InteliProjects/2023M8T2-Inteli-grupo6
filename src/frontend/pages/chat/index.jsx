import axios from "axios";
import { baseURL } from "../../api/baseURL";
import { useEffect, useState } from "react";

import { View } from "react-native";
import { InputSection } from "../../components/InputSection";
import { TalkSection } from "../../components/TalkSection";
import { OptionsSection } from "../../components/OptionsSection";
import { Loading } from "../../components/Loading";

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [change, makeChange] = useState(false);

  const fetchMessages = async () => {
    console.log("Acessando a API...");
    try {
      setIsLoading(true);

      const response = await axios.get(`${baseURL}/chat/1`);

      if (response.status === 200) {
        setMessages(response.data);
        setIsLoading(false);
        return;
      } else {
        throw new Error(`Failed to fetch messages. Status: ${response.status}`);
      }
    } catch (err) {
      setIsLoading(false);
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [change]);

  return (
    <View className="h-full bg-white">
      <View className="h-full mt-1 flex flex-col flex-nowrap justify-between">
        <TalkSection messages={messages} />

        {!isLoading ? (
          <OptionsSection
            lastMessage={
              messages[0] ? messages[messages.length - 1].message : ""
            }
          />
        ) : (
          <Loading />
        )}

        <InputSection change={makeChange} />
      </View>
    </View>
  );
}
