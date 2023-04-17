import React from "react";
import { View, Text } from "react-native";
import styleFunc from "./statuscardstyle";

export enum StatusTypeEnum {
  "Red" = "red",
}

type StatusCardProps = {
  type: StatusTypeEnum | string;
  children?: React.ReactText;
};

export default function StatusCard({ children, type }: StatusCardProps) {
  const style = styleFunc(type);
  return (
    <View style={style.container}>
      <Text style={style.text}>{children}</Text>
    </View>
  );
}
