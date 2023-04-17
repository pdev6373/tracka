import React from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { Input } from "native-base";

type TextInputProp = {
  placeholder: string;
  width?: string | number;
  size?: string;
  borderColor?: string;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  marginBottom?: number;
  type?: string;
  InputRightElement?: JSX.Element;
  value: string;
  onChangeText: (e: string | React.ChangeEvent<any>) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};

const TextInput = (props: TextInputProp) => {
  const {
    placeholder,
    width,
    size,
    borderColor,
    paddingBottom,
    paddingLeft,
    paddingTop,
    marginBottom,
    type,
    InputRightElement,
    onChangeText,
    onBlur,
    value,
  } = props;

  return (
    <Input
      mx="3"
      mb={marginBottom || 6}
      paddingTop={paddingTop || 4}
      paddingBottom={paddingBottom || 4}
      paddingLeft={paddingLeft || 5}
      borderRadius={6}
      placeholder={placeholder}
      width={width || "100%"}
      alignSelf="center"
      size={size || "xl"}
      type={type}
      _focus={{
        borderColor: borderColor || "primary.500",
      }}
      InputRightElement={InputRightElement}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
    />
  );
};

export default TextInput;
