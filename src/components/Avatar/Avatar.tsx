import React from "react";
import { View, Text } from "react-native";
import UserAvatar from "react-native-user-avatar";
import { primaryColors } from "../../styles/Colors";
import styles from "./avatarstyles";

interface AvatarProps {
  src?: string;
  style?: Record<string, string | number>;
  name: string;
  showName?: boolean;
  size?: number;
}

const Avatar = ({ style, showName = true, ...props }: AvatarProps) => {
  return (
    <View style={[styles.container, style]}>
      <UserAvatar
        textStyle={styles.name}
        style={styles.avatar}
        borderRadius={100}
        bgColor={primaryColors.blue}
        textColor={primaryColors.white}
        {...props}
      />
      {showName && <View>
        <Text style={styles.name}>{props.name}</Text>
      </View>}
    </View>
  );
};

export default Avatar;
