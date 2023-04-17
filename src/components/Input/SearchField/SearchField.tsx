import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import TextField from "../TextField";
import { Search, Close } from "../../Vectors";
import styles from "./searchFieldStyles";
import { primaryColors } from "../../../styles/Colors";

interface SearchFieldProps {
  placeholder?: string;
  onChangeText: (p: string) => void;
  onClearHandler: () => void;
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  inputStyle?: any;
  value: string;
}

const SearchField = ({
  placeholder,
  onChangeText,
  inputStyle,
  onSubmitEditing,
  value,
  onClearHandler,
}: SearchFieldProps) => {

  function onChangeTextHandler(textInput: string) {
    onChangeText(textInput);
  }

  function clearText() {
    onChangeText("");
    onClearHandler();
  }

  return (
    <View>
      <TextField
        containerStyle={[styles.searchTextField, inputStyle]}
        placeholder={placeholder}
        onChangeText={onChangeTextHandler}
        onSubmitEditing={onSubmitEditing}
        value={value}
        prefix={
          <TouchableWithoutFeedback>
            <View>
              <Search width={16} height={16} fill={primaryColors.neutral} />
            </View>
          </TouchableWithoutFeedback>
        }
        suffix={
          value ? (
            <TouchableWithoutFeedback onPress={clearText}>
              <View>
                <Close width={16} height={16} fill={primaryColors.neutral} />
              </View>
            </TouchableWithoutFeedback>
          ) : null
        }
      />
    </View>
  );
};

export default SearchField;
