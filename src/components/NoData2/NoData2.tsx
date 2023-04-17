import React from "react";
import { View, Text } from "react-native";
import { NoData2Icon } from "../Vectors";
import styles from "./nodata2styles";
import Button from "../Buttons/ButtonComponent/Button";

export default function NoData2({
  heading ,
  lead ,
  report,
  showButton,
  buttonText = "View Community Needs",
}: {
  heading?: string;
  lead?: string;
  report?: () => void
  buttonText: string,
  showButton?: boolean
}) {
  return (
    <View style={styles.container}>
      <NoData2Icon />
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.lead}>{lead}</Text>
   
      {showButton && <Button style={styles.button} variant="primary" label={buttonText} onPress={report} />}

    </View>
  );
}
