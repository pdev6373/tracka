import React from "react";
import { View, Text } from "react-native";
import { NoDataIcon } from "../Vectors";
import styles from "./nodatastyles";

export default function NoData({
  heading = "No Results Found",
  lead = "Please try another search.",
}: {
  heading?: string;
  lead?: string;
}) {
  return (
    <View style={styles.container}>
      <NoDataIcon />
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.lead}>{lead}</Text>
    </View>
  );
}
