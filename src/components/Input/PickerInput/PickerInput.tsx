import React, { useEffect, useRef } from "react";
import { Select, Text, Box, View } from "native-base";
import selectStylesFunc from "./pickerinputstyes";
import ChevronSvgComponent from "../../Vectors/ChevronIcon";
import ErrorMessage from "../../ErrorMessage";
import { primaryColors } from "../../../styles/Colors";
import {Picker} from '@react-native-picker/picker';


type SelectValue = {
  label: string;
  value: string;
};

type SelectInputProp = {
  placeholder?: string;
  accessibilityLabel?: string;
  data: SelectValue[];
  styles?: any;
  onValueChange?: (p: string) => void;
  isDisabled?: boolean;
  label?: string;
  variant?: "secondary" | "primary" | "search";
  selectedValue?: string;
  errors?: string;
  size?: string;
};

const PickerInput = (props: SelectInputProp) => {
  const {
    placeholder,
    accessibilityLabel,
    data,
    isDisabled,
    label,
    variant = "secondary",
    size,
    selectedValue,
    errors,
  } = props;

  const selectStyles = selectStylesFunc(variant, !!selectedValue, size);

  const dropdownIcon = (
    <View style={selectStyles.dropdownIcon}>
      <ChevronSvgComponent
        color={
          !!selectedValue ? primaryColors.lightBlue : primaryColors.neutral
        }
        direction="down"
      />
    </View>
  );

  const selectRef = useRef();

  return (
    <>
      {label && <Text style={selectStyles.label}>{label}</Text>}
      <Picker
        selectedValue={selectedValue}
        accessibilityLabel={accessibilityLabel}
        onValueChange={props.onValueChange}
        style={selectStyles.select}
      >
        {data.map((item) => (
          <Picker.Item
            key={item.value}
            label={item.label || item.value}
            value={item.value}
          />
        ))}
      </Picker>
      {!!errors && (
        <View style={selectStyles.errorWrapper}>
          <ErrorMessage errors={errors} />
        </View>
      )}
    </>
  );
};

export default PickerInput;
