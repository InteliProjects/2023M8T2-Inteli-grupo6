import { View, ScrollView, Text, Pressable } from "react-native";

export function ScrollFilter({ handleFilterClick, filters }) {
  return (
    <ScrollView horizontal className="flex gap-x-1 my-4 grow-0">
      {filters.map((cat, idx) => (
        <Pressable key={idx} onPress={() => handleFilterClick(idx)}>
          <Text
            className={`text-center ${
              !cat.selected
                ? "bg-white text-[#E9344E]"
                : "bg-[#E9344E] text-white"
            } border-red-500 border rounded-xl p-1 px-4 mx-2`}
          >
            {cat.name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
