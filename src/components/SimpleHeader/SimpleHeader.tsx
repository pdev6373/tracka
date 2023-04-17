import React from "react";
import { Box, View, Text } from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from "react-native";
import { scale } from 'react-native-size-matters';
import styles from './simpleheaderstyles';
import { Back } from '../Vectors';
import { primaryColors } from '../../styles/Colors';
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

const statusBarHeight = getStatusBarHeight();

export default function SimpleHeader({heading, style, subHeading, subHeadingButton, showArrow = true,}: {
  heading: string;
  style?: Record<string, string>;
  subHeading?:string,
  subHeadingButton?: () => void,
  showArrow?: boolean,
}) {
  const navigation = useNavigation();
  const navigateBack = () => navigation.goBack();

  return (
    <Box
      style={[
        styles.filter,
        {
          paddingTop: statusBarHeight + 16,
          height: scale(statusBarHeight + 58),
        },
        style,
      ]}
    >
        <TouchableWithoutFeedback onPress={ navigateBack}>
          {showArrow && <View>
            <AntDesign name="arrowleft" size={24} color={primaryColors.blue} />
          </View>}
        </TouchableWithoutFeedback>
        <Text style={styles.heading}>{heading}</Text>
        {subHeading && 
        <TouchableOpacity onPress={subHeadingButton}> 
          <Text style={styles.save}>{subHeading}</Text>
        </TouchableOpacity>
        
        
        }
    </Box>
  );
}
