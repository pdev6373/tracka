import React from "react";
import styles from "../../modules/Allocation/Components/componentStyle";
import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Pressable,
  Text,
  View,
} from "native-base";
import { scale } from "react-native-size-matters";
import Back from "../Vectors/Back";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { primaryColors } from "../../styles/Colors";
import { useNavigation } from '@react-navigation/native';

export default function Header({
  color = primaryColors.dark,
  fill = primaryColors.neutral_2,
  title = 'Aba North',
}) {
  const navigation = useNavigation();

  const paddingTop = getStatusBarHeight() + 15;
  const backProp = {
    width: scale(20),
    height: scale(20),
    fill: fill,
  };
  return (
    <Flex direction={'row'} style={[styles.header, { paddingTop }]}>
      <Box>
        {navigation.canGoBack() ? (
          <Pressable onPress={navigation.goBack}>
            <Back {...backProp} />
          </Pressable>
        ) : null}
      </Box>
      <View style={[{ height: scale(30), flex: 0.9 }]}>
        <Center>
          <Text style={[styles.headerTitle, { color }]}>{title}</Text>
        </Center>
      </View>
    </Flex>
  );
}
