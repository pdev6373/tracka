import React, { useRef, useState } from "react";
import { View, TextInput, TextInputProps, Text } from "react-native";
import { secondaryColors } from "../../../styles/Colors";
import ErrorMessage from "../../ErrorMessage";
import { TextFieldVariant } from "./types";
import styleFunc from "./textFieldStyles";

export interface TextFieldProps extends TextInputProps {
  variant?: TextFieldVariant;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  style?: Record<string, any>;
  label?: string;
  containerStyle?: Record<string, any>;
  errors?: string | string[];
  disabled?: boolean;
}

const TextField = ({
  variant = TextFieldVariant.Primary,
  prefix,
  suffix,
  style = {},
  containerStyle,
  label,
  errors,
  disabled = false,
  onFocus,
  onBlur,
  ...props
}: TextFieldProps) => {
  const inputRef = useRef<TextInput | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const innerStyle = styleFunc({
    variant,
    isPrefix: !!prefix,
    isSuffix: !!suffix,
    disabled,
    isFocused,
  });

  const focusHandler = (e: any) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const onBlurHandler = (e: any) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <>
      {label && <Text style={innerStyle.label}>{label}</Text>}
      <View style={[innerStyle.container, containerStyle]}>
        {!!prefix && <View style={innerStyle.prefix}>{prefix}</View>}
        <TextInput
          onFocus={focusHandler}
          onBlur={onBlurHandler}
          ref={inputRef}
          editable={!disabled}
          underlineColorAndroid="transparent"
          placeholderTextColor={secondaryColors.neutralSecondary}
          style={[innerStyle.textField, style]}
          {...props}
        />
        {!!suffix && <View style={innerStyle.suffix}>{suffix}</View>}
      </View>
      {!!errors && (
        <View style={innerStyle.errorWrapper}>
          <ErrorMessage errors={errors} />
        </View>
      )}
    </>
  );
};

export default TextField;
