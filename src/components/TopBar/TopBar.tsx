import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import debounce from "lodash/debounce";
import { SearchField } from "../Input";
import Filter from "../FilterButton";
import styles from "./topBarStyles";

interface TopBarProps {
  placeholder?: string;
  searchHandler: (p: string) => void;
  filterHandler: (p: string) => void;
  inputStyle?: any;
  containerStyle?: any;
  DonotShowFilterButton: boolean
}

export default function TopBar({
  placeholder,
  searchHandler,
  filterHandler,
  containerStyle,
  inputStyle,
  DonotShowFilterButton,
}: TopBarProps) {

  const [value, setValue] = useState("");

  const debouncedSearchHandler = useCallback(
    debounce((searchTerm) => searchHandler(searchTerm), 1000),
    []
  );

  useEffect(() => {
    debouncedSearchHandler(value)
  }, [value, debouncedSearchHandler]);

  const onClearHandler = () => {
    searchHandler("");
  };

  const onSearch = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    // searchHandler(e.nativeEvent.text);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.searchSection}>
        <SearchField
          value={value}
          onSubmitEditing={onSearch}
          onClearHandler={onClearHandler}
          onChangeText={setValue}
          placeholder={placeholder}
          inputStyle={[inputStyle]}
        />
      </View>
 
     {!DonotShowFilterButton &&
      <View style={styles.filterSection}>
        <Filter filterHandler={filterHandler} />
      </View>
      }
    </View>
  );
}
