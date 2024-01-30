import { View, FlatList } from "react-native";
import { SapCard } from "../sapCard";

export function SapScrollCards({ data }) {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <SapCard key={index} data={item} idx={index} />
      )}
      className="flex p-4 my-2 grow-0"
      showsHorizontalScrollIndicator={false}
    />
  );
}
