import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styleFunc from "./buttonstyles";

type ButtonProps = {
  variant?: "secondary" | "primary" | "tertiary" | "error" | "success";
  onPress: () => void;
  children?: React.ReactNode;
  label?: string;
  style?: any;
  labelStyle?: any;
  disabled?: boolean;
};
export default function Button({
  variant = "secondary",
  onPress,
  children,
  label,
  style = {},
  labelStyle = {},
  disabled = false,
}: ButtonProps) {
  const styles = styleFunc(variant, disabled);

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, style]}
    >
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      {!label && !!children && <>{children}</>}
    </TouchableOpacity>
  );
}
