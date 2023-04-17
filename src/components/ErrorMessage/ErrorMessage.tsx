import React from "react";
import { View, Text } from "react-native";
import styles from './errormessagestyle';

export default function ErrorMessage({
  errors,
}: {
  errors?: string | string[];
}) {
  return (
    <View>
      {typeof errors === "object" && <Text style={styles.errorText}>{errors}</Text>}
      {typeof errors === "string" && <Text style={styles.errorText}>{errors}</Text>}
    </View>
  );
}
