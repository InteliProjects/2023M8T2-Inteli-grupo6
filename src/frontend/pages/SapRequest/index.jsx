import React, { useCallback, useState } from "react";
import { View, FlatList, Pressable, Text, ScrollView } from "react-native";
import { SapItem } from "../../components/sapItem";

const ALLDATA = [
  {
    id: 1,
    name: "hammer",
    category: "Other",
    stock: 8,
    delivery: "3 days",
    position: [1, 3, 4],
    icon: "hammer",
  },
  {
    id: 2,
    name: "drill",
    category: "Engineering",
    stock: 1,
    delivery: "4 days",
    position: [1, 2, 1],
    icon: "robot-industrial",
  },
  {
    id: 3,
    name: "grinders",
    category: "Engineering",
    stock: 2,
    delivery: "3 days",
    position: [1, 3, 4],
    icon: "robot-industrial",
  },
  {
    id: 4,
    name: "axe",
    category: "Other",
    stock: 3,
    delivery: "3 days",
    position: [1, 3, 4],
    icon: "axe",
  },
  {
    id: 5,
    name: "axe",
    category: "Other",
    stock: 3,
    delivery: "3 days",
    position: [1, 3, 4],
    icon: "axe",
  },
];

export function SapRequest() {
  const [myData, setMyData] = useState(ALLDATA);

  const renderItem = useCallback(({ item }) => {
    return <SapItem item={item} />;
  }, []);

  return (
    <View className="flex h-full">
      <View className="flex w-5/6 self-center my-2">
        <Text className="text-sm text-center">
          Itens que você está solicitando para o almoxarifado:{" "}
        </Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={myData}
        renderItem={renderItem}
        className="flex w-5/6 border m-1 rounded-2xl self-center"
      />
      <View className="h-24 flex items-center justify-center">
        <Pressable className="flex rounded-2xl p-4 w-2/3 items-center bg-[#E9344E] ">
          <Text className="text-center font-bold text-2xl text-white">
            Fazer requisição
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
