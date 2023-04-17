import React from "react";
import { Text, Box, Image } from "native-base";
import { Animated, Pressable } from "react-native";
import { scale } from "react-native-size-matters";

const Collapsable = ({
  titleStyle,
  title,
  children,
  style,
  minHeight = 60,
}: any) => {
  const [toggleFilterBy, setToggleFilterBy] = React.useState(0);
  let height = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const expandFilterBy = () => {
    Animated.timing(height, {
      toValue: scale(toggleFilterBy),
      duration: 600,
      useNativeDriver: false,
    }).start();
    setToggleFilterBy(
      !toggleFilterBy ? (minHeight || 60) * children.length : 0
    );
  };

  return (
    <Box style={style}>
      <Pressable style={[titleStyle]} onPress={expandFilterBy}>
        {title({ open: !toggleFilterBy })}
      </Pressable>
      <Animated.View style={[{ height, overflow: 'hidden' }]}>
        {children}
      </Animated.View>
    </Box>
  );
};

export default Collapsable;
