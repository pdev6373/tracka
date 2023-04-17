import React, { useEffect, useRef } from "react";
import { Select, Text, Box, View } from "native-base";
import selectStylesFunc from "./selectstyle";
import ChevronSvgComponent from "../../Vectors/ChevronIcon";
import ErrorMessage from "../../ErrorMessage";
import { FontAwesome } from "@expo/vector-icons";
import { primaryColors } from "../../../styles/Colors";
import { borderRadius } from "../../../styles/Borders";
import { scale } from "react-native-size-matters";

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

const SelectInput = (props: SelectInputProp) => {
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
      <Select
        wrapperRef={selectRef}
        selectedValue={selectedValue}
        accessibilityLabel={accessibilityLabel}
        placeholder={placeholder}
        _selectedItem={{
          bg: "primary.50",
        }}
        onValueChange={props.onValueChange}
        isDisabled={isDisabled}
        dropdownIcon={dropdownIcon}
        style={selectStyles.select}
        variant="unstyled"
      >
        {data.map((item) => (
          <Select.Item
            key={item.value}
            label={item.label || item.value}
            value={item.value}
          />
        ))}
      </Select>
      {!!errors && (
        <View style={selectStyles.errorWrapper}>
          <ErrorMessage errors={errors} />
        </View>
      )}
    </>
  );
};

export default SelectInput;
