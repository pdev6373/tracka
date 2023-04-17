import React from "react";
import { View, Text } from "react-native";
import { format } from "date-fns";
import styles from "./datecomponentstyle";

export default function DateComponent({ date }: { date: string }) {
  return (
    <View>
      <Text style={styles.date}>{format(new Date(date), "MMMM, dd yyyy")}</Text>
    </View>
  );
}
