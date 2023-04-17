import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import Button from "../../../../components/Buttons/ButtonComponent/Button";
import colors from "../../../../styles/Colors";
import style from "./onboardingfooterstyle";

interface OnboardingFooterProp {
  activePage: number;
  isLastPage: boolean;
  nextHandler: () => void;
  completeHandler: () => void;
  skipHandler: () => void;
}
const Dots = ({ selected }: { selected: boolean }) => (
  <View
    style={[
      style.dots,
      { backgroundColor: selected ? colors.blue : colors.neutralBorder },
    ]}
  />
);

export default function OnboardingFooter({
  activePage,
  nextHandler,
  isLastPage,
  completeHandler,
  skipHandler,
}: OnboardingFooterProp) {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.2;

  const nextBtnHandler = () => {
    if (isLastPage) {
      return completeHandler();
    }
    return nextHandler();
  };

  return (
    <View style={[style.container, { height: HEIGHT }]}>
      <Button onPress={skipHandler} label="Skip" variant="tertiary" />
      <View style={style.dotsWrapper}>
        <Dots selected={activePage === 1} />
        <Dots selected={activePage === 2} />
        <Dots selected={activePage === 3} />
      </View>
      <Button onPress={nextBtnHandler} label="Next" variant="tertiary" />
    </View>
  );
}
