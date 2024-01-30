import React, { useCallback, useState } from "react";
import { View, FlatList } from "react-native";
import { ScrollFilter } from "../../components/ScrollFilterH";
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
];

export function SapItems() {
  const [myData, setMyData] = useState(ALLDATA);

  const uniqueTitlesSet = new Set([
    "All",
    ...ALLDATA.map((item) => item.category),
  ]);

  const uniqueTitlesArray = Array.from(uniqueTitlesSet);

  const [filters, setFilters] = useState(
    uniqueTitlesArray.map((category) => ({
      name: category,
      selected: category === "All",
    }))
  );

  const handleFilterClick = (idx) => {
    const newFilters = filters.map((filter, index) => {
      return {
        ...filter,
        selected: index === idx,
      };
    });

    setFilters(newFilters);

    const selectedCategory = newFilters.find((filter) => filter.selected).name;

    if (selectedCategory === "All") {
      setMyData(ALLDATA);
    } else {
      const filteredData = ALLDATA.filter(
        (item) => item.category === selectedCategory
      );
      setMyData(filteredData);
    }
  };

  const renderItem = useCallback(({ item }) => {
    return <SapItem item={item} />;
  }, []);

  return (
    <View className="flex">
      <ScrollFilter handleFilterClick={handleFilterClick} filters={filters} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={myData}
        renderItem={renderItem}
      />
    </View>
  );
}
