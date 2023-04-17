import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";


interface FadeInAndOutProps  {
    children: React.ReactNode,
    style?: Record<string, any>,
    duration?: number,
    outDuration?: number,
delay?: number
}

const FadeInAndOut = ({ children, style = {}, duration = 10000, delay = 0, outDuration = duration}: FadeInAndOutProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
        delay,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: outDuration,
        delay: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...style,
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInAndOut;
