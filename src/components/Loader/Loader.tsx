import React from "react";
import { View, ActivityIndicator } from "react-native";
import { primaryColors } from "../../styles/Colors";
import styles from "./loaderstyle";

export default function LoaderComponent({
  isLoading = true,
}: {
  isLoading: boolean;
}) {
  return (
    <View style={styles.loader}>
      <ActivityIndicator
        animating={isLoading}
        color={primaryColors.lightBlue}
        size="large"
      />
    </View>
  );
}
