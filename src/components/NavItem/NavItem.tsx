import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../styles/Colors";
import {
  ThumbsUp,
  Cube,
  Person,
  Settings,
  Info,
  Support,
  LogOut,
  File,
  FeedBacks
} from "../Vectors";
import ChevronSvgComponent from "../Vectors/ChevronIcon";
import stylesFunc from './navitemstyles';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export enum NavIconMapEnum {
  'THUMBS_UP' = 'thumbsup',
  'CUBE' = 'cube',
  'PERSON' = 'person',
  'SETTINGS' = 'settings',
  'INFO' = 'info',
  'SUPPORT' = 'support',
  'LOGOUT' = 'logout',
  'FILE' = 'file',
  "CHECKICON" = "checkIcon",
  "FEEDBACKS" = "feedbacks"
}

const IconMap = {
  [NavIconMapEnum.THUMBS_UP]: <ThumbsUp />,
  [NavIconMapEnum.CUBE]: <Cube />,
  [NavIconMapEnum.PERSON]: <Person />,
  [NavIconMapEnum.SETTINGS]: <Settings />,
  [NavIconMapEnum.INFO]: <Info />,
  [NavIconMapEnum.SUPPORT]: <Support />,
  [NavIconMapEnum.LOGOUT]: <LogOut />,
  [NavIconMapEnum.FILE]: <File />,
  [NavIconMapEnum.CHECKICON]: <AntDesign name="checkcircleo" size={24} color="black" />,
  [NavIconMapEnum.FEEDBACKS]: <FeedBacks />
};

export default function NavItem({
  title,
  iconName,
  route,
  routeHandler,
  isActive,
}: {
  title: string;
  iconName: NavIconMapEnum;
  route: string;
  routeHandler: (route: string) => void;
  isActive?: boolean;
}) {
  const [pressIn, setPressIn] = useState<boolean>(false);

  const styles = stylesFunc(pressIn, isActive);

  const onNavItemPress = () => routeHandler(route);

  return (
    <Pressable
      onPressOut={() => setPressIn(false)}
      onPressIn={() => setPressIn(true)}
      onPress={onNavItemPress}
    >
      <View style={styles.container}>
        {React.cloneElement(IconMap[iconName], {
          width: scale(24),
          height: scale(24),
          stroke: pressIn || isActive ? primaryColors.neutral_2 : primaryColors.neutral_2,
          fill: pressIn || isActive ? 'transparent' : 'transparent',
        })}
        <Text style={styles.linkTitle}>{title}</Text>
        <ChevronSvgComponent
          direction="right"
          color={
            pressIn || isActive ? primaryColors.neutral_2 : primaryColors.neutral_2
          }
        />
      </View>
    </Pressable>
  );
}
