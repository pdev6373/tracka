import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { primaryColors } from "../../styles/Colors";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { HStack } from "native-base";
import { scale } from "react-native-size-matters";
import Button from "../Buttons/ButtonComponent/Button";
import { Back, Bookmark, Share } from "../Vectors";
import styles from "./shareheaderstyles";
import { useNavigation } from "@react-navigation/native";

const statusBarHeight = getStatusBarHeight();

export default function ShareHeader({
  onShare,
  onShowInterest,
  userIsInterested,
  isShowingInterest,
  showInterest
}: {
  onShare: () => void;
  onShowInterest: () => void;
  isShowingInterest: boolean;
  userIsInterested: boolean;
  showInterest: boolean;
}) {
  const navigation = useNavigation();
  const navigateBack = () => navigation.goBack();

  const formatInterestText = () => {
    if (isShowingInterest) {
      return "Showing interest...";
    }
    return userIsInterested ? "Interested" : "Show Interest";
  };

  return (
    <View
      style={[
        styles.header,
        {
          paddingTop: statusBarHeight + 16,
          height: scale(statusBarHeight + 56),
        },
      ]}
    >
      <TouchableWithoutFeedback onPress={navigateBack}>
        <View style={styles.backBtn}>
          <Back width={24} height={24} fill={primaryColors.neutral_2} />
        </View>
      </TouchableWithoutFeedback>
      <HStack space={scale(8)}>
       {showInterest && <View style={styles.btn}>
          <Button
            style={{
              backgroundColor: userIsInterested
                ? primaryColors.lightBlue
                : "transparent",
            }}
            disabled={userIsInterested || isShowingInterest}
            onPress={onShowInterest}
          >
            <View style={styles.btnContent}>
              <Bookmark
                fill={
                  userIsInterested
                    ? primaryColors.white
                    : primaryColors.lightBlue
                }
              />
              <Text
                style={[
                  styles.btnText,
                  {
                    color: userIsInterested
                      ? primaryColors.white
                      : primaryColors.lightBlue,
                  },
                ]}
              >
                {formatInterestText()}
              </Text>
            </View>
          </Button>
        </View>}
        <View style={styles.btn}>
          <Button onPress={onShare}>
            <View style={styles.btnContent}>
              <Share fill={primaryColors.lightBlue} />
              <Text style={styles.btnText}>Share</Text>
            </View>
          </Button>
        </View>
      </HStack>
    </View>
  );
}
