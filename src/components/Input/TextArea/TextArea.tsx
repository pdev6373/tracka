import React from "react";
import { TextArea, IInputProps, View } from "native-base";
import ErrorMessage from "../../ErrorMessage";
import { Text } from "react-native";

import styles from "./textareastyle";

interface TextAreaProps extends IInputProps {
  label?: string;
  totalLines?: number;
  errors?: string | string[];
  onTextChange: (p: string) => void;
}

export default function TextAreaComponent({
  label,
  onTextChange,
  value,
  errors,
  ...props
}: TextAreaProps) {
  return (
    <>
      <>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextArea
          {...props}
          value={value}
          style={styles.textArea}
          onChangeText={onTextChange}
        />
        {!!errors && (
          <View style={styles.errorWrapper}>
            <ErrorMessage errors={errors} />
          </View>
        )}
      </>
    </>
  );
}
