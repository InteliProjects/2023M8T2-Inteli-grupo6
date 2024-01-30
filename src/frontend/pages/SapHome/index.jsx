import { View, ScrollView, Text } from "react-native";
import { useState } from "react";

import { ScrollFilter } from "../../components/ScrollFilterH";
import { FilterSection } from "../../components/filterSection";

const ALLDATA = [
  {
    title: "Tools",
    data: [
      {
        title: "Engeneering",
        description: "Drills, guns, grinders...",
        icon: "robot-industrial",
      },
      {
        title: "Other",
        description: "Axes, hammers, pilers, screw tools, chisels...",
        icon: "tools",
      },
    ],
  },
  {
    title: "Parts",
    data: [
      {
        title: "Industries",
        description: "Specific parts of industries",
        icon: "fridge-industrial-outline",
      },
      {
        title: "Other",
        description: "Screws, hex keys, torx, wood...",
        icon: "toolbox-outline",
      },
      {
        title: "Engeneering",
        description: "Drills, guns, grinders...",
        icon: "robot-industrial",
      },
    ],
  },
];

export function SapHome() {
  const [myData, setMyData] = useState(ALLDATA);

  const uniqueTitlesSet = new Set([
    "All",
    ...ALLDATA.flatMap((category) => category.data.map((item) => item.title)),
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
      const filteredData = ALLDATA.map((category) => ({
        ...category,
        data: category.data.filter((item) => item.title === selectedCategory),
      }));
      setMyData(filteredData);
    }
  };

  return (
    <View className="h-full">
      <ScrollFilter handleFilterClick={handleFilterClick} filters={filters} />
      <ScrollView>
        {myData.map((data, idx) => (
          <FilterSection key={idx} data={data} />
        ))}
      </ScrollView>
    </View>
  );
}
