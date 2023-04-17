import React from "react";
import { View, Text, ImageSourcePropType } from "react-native";
import { Image } from "native-base";
import styles from "./onboardingcardstyle";

interface OnboardingCardProps {
    heading: string;
    description: string;
    imageUrl: Object;
    alt?: string
}

export default function OnboardingCard(props: OnboardingCardProps) {
  return (
    <View style={styles.container}>
      <Image
        alt={props.alt || props.heading}
        style={[styles.image]}
        resizeMode="stretch"
        source={props.imageUrl}
      />
      <View style={styles.content}>
          <Text style={styles.heading}>{props.heading}</Text>
          <Text style={styles.desc}>{props.description}</Text>
      </View>
    </View>
  );
}
