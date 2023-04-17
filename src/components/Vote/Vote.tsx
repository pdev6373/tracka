import React from "react";
import { View, Text } from "react-native";
import { primaryColors } from "../../styles/Colors";
import { ThumbsUp } from "../Vectors";
import styles from "./votestyles";

interface VoteProps {
  vote: number;
  voted?: boolean;
  showIcon?: boolean;
}

export default function Vote({ vote = 0, voted, showIcon = true }: VoteProps) {
  return (
    <View style={styles.container}>
      {/* {showIcon && (
        <ThumbsUp
          stroke={primaryColors.blue}
          fill={voted ? primaryColors.blue : ""}
          style={styles.icon}
        />
      )} */}
      {vote > 0 && (
        <ThumbsUp
          stroke={primaryColors.blue}
          fill={primaryColors.blue}
          style={styles.icon}
        />
      )}
      <Text style={styles.voteText}>{`${vote} votes`}</Text>
    </View>
  );
}
