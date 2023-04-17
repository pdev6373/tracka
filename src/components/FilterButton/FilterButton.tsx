import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { primaryColors } from "../../styles/Colors";
import { FilterIcon } from "../Vectors";

const Filter = ({ filterHandler }) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={filterHandler}>
          <FilterIcon width={24} height={24} fill={primaryColors.blue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;
