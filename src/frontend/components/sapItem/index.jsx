import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SwipeableItem, {
  useSwipeableItemParams,
} from "react-native-swipeable-item";
import { useState } from "react";

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

const Botao = () => {
  const { openLeft } = useSwipeableItemParams();

  return (
    <TouchableOpacity onPress={() => openLeft()}>
      <MaterialCommunityIcons
        name="arrow-left-drop-circle-outline"
        size={30}
        color="black"
      />
    </TouchableOpacity>
  );
};

export function SapItem({ item }) {
  return (
    <SwipeableItem
      key={item.id}
      item={item}
      renderUnderlayLeft={() => <UnderlayLeft item={item} />}
      snapPointsLeft={[100]}
    >
      <View
        className={`flex flex-row items-center justify-between p-4 my-2 w-5/6 self-center h-fit rounded-2xl border-r-8 border-b-4 ${
          COLORS[item.id % COLORS.length].background
        }`}
      >
        <View className="flex flex-col justify-between">
          <Text className="font-bold capitalize text-2xl">{`${item.name}`}</Text>
          <Text className="">Stock: {item.stock}</Text>
          <Text className="">Delivery: {item.delivery}</Text>
        </View>
        <View className="flex flex-row items-center">
          <View
            className={`flex flex-row items-center justify-end rounded-2xl mx-4 p-2 ${
              COLORS[item.id % COLORS.length].foreground
            }`}
          >
            <MaterialCommunityIcons name={item.icon} size={65} color="black" />
          </View>
          <Botao />
        </View>
      </View>
    </SwipeableItem>
  );
}

const UnderlayLeft = ({ item }) => {
  const { close } = useSwipeableItemParams();
  return (
    <View
      className={`flex flex-row items-center justify-end p-6 my-2 w-5/6 self-center rounded-2xl ${
        COLORS[item.id % COLORS.length].foreground
      }`}
    >
      <TouchableOpacity onPress={() => close()}>
        <MaterialCommunityIcons name="bookmark-plus" size={65} color="black" />
      </TouchableOpacity>
    </View>
  );
};
