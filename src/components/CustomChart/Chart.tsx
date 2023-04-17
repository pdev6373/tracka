import React from "react";
import { View, Text, Animated } from "react-native";
import { primaryColors } from "../../styles/Colors";
import styles from "./chartStyles";
import { Box, HStack } from "native-base";
import { scale } from "react-native-size-matters";

interface Data {
  label: string;
  value: number;
}
interface ChartProps {
  data: Data[];
  style?: Record<string, string | number>;
}
const ChartBar = ({ data }: { data: Data }) => {
  const heightAnim = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const initValue = scale(135 * (data.value / 100));
  React.useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: initValue,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [heightAnim]);
  return (
    <Box>
      <Box style={[styles.chartItem, styles.chartItemContainer]}>
        <Animated.View style={[styles.chartItem, { height: heightAnim }]} />
      </Box>
      <Text style={styles.chartItemText}>{data.label}</Text>
    </Box>
  );
};
const Chart = ({ style, ...props }: ChartProps) => {
  return (
    <HStack style={[styles.container, style]}>
      {props.data.map((item) => {
        return <ChartBar data={item} key={item.label + item.value} />;
      })}
    </HStack>
  );
};

export default Chart;
