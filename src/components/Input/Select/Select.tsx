import React, { forwardRef, LegacyRef, Ref } from "react";
import { View, Text, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
// @ts-ignore
import ReactSelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from "./selectStyles";
import ChevronSvgComponent from "../../Vectors/ChevronIcon";
import { Box } from "native-base";

type OptionItem = {
  label: string;
  value: string;
}
type SelectProps = {
  onTouch?: (item?: any) => void;
  onValueChange?: (itemValue: string, itemIndex: number) => void;
  onSelect?: (itemValue: OptionItem, itemIndex: number) => void;
  data: OptionItem[];
  label?: string;
  placeholder?: string;
  selectedValue?: string;
  width?: number | string;
  disabled?: boolean;
  styles?: any;
}

 
export const SelectDropdown = forwardRef(
  (props: SelectProps, ref: Ref<any> | undefined) => {
    return (
      <View style={styles.dropdownsRow}>
        <Box>
          {props.label && <Text style={styles.label}>{props.label}</Text>}
          <Pressable onPress={props.onTouch}>
            <ReactSelectDropdown
              ref={ref}
              data={props.data}
              // onSelect={props.onSelect}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                props.selectedValue = selectedItem.value
                props.onValueChange(selectedItem.value, index)
              }}
              defaultButtonText={props.placeholder || "Select"}
              buttonTextAfterSelection={(selectedItem: OptionItem) =>
                selectedItem.label
              }
              rowTextForSelection={(item: OptionItem) => item.label}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={() => {
                return <ChevronSvgComponent />;
              }}
              dropdownIconPosition={"right"}
              rowTextStyle={styles.dropdown1RowTxtStyle}
              {...props}
            />
          </Pressable>
        </Box>
      </View>
    );
  }
);
