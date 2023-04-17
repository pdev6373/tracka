import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { primaryColors } from "../../../styles/Colors";
import { scale } from "react-native-size-matters";

const DropdownComponent = ({
  data,
  label,
  value,
  onChange,
  placeHolder,
}: {
  data: any;
  label: string;
  value: any;
  onChange: any;
  placeHolder: string;
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: primaryColors.neutral,
          fontSize: scale(12),
          fontFamily: "Roboto",
          marginVertical: scale(10),
        }}
      >
        {label}
      </Text>
      {/* {renderLabel()} */}
      <Dropdown
        style={[
          styles.dropdown,
          {
            borderColor: isFocus
              ? primaryColors.lightBlue
              : primaryColors.neutral,
          },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        // maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeHolder : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  dropdown: {
    // height: 60,
    paddingVertical: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
  },
});
