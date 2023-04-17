import React from "react";
import { GestureResponderEvent } from "react-native";
import { Input, Button } from "native-base";

type CustomButtonProp = {
  size?: string;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginTop?: number;
  borderRadius?: number;
  variant?: string;
  colorScheme?: string;
  backgroundColor?: string;
  borderColor?: string;
  LeftIcon?: JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
  children: string;
  textColor?: string;
  otherStyles?: Object;
};

const CustomButton = (props: CustomButtonProp) => {
  const {
    size,
    paddingBottom,
    paddingLeft,
    paddingTop,
    paddingRight,
    marginTop,
    borderRadius,
    variant,
    colorScheme,
    LeftIcon,
    onPress,
    children,
    textColor,
    backgroundColor,
    borderColor,
    otherStyles,
  } = props;

  return (
    <Button
      {...otherStyles}
      size={size || "lg"}
      mt={marginTop}
      paddingLeft={paddingLeft || 10}
      paddingRight={paddingRight || 10}
      paddingTop={paddingTop || 4}
      paddingBottom={paddingBottom || 4}
      borderRadius={borderRadius || 5}
      variant={variant || "outline"}
      colorScheme={colorScheme}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      fontFamily="roboto"
      leftIcon={LeftIcon}
      onPress={onPress}
      _text={{
        color: textColor,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
