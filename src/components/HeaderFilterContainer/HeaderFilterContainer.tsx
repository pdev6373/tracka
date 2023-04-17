import React from "react";
import { Box, HStack, View } from "native-base";
import TopBar from "../TopBar";
import SelectInput from "../Input/SelectInput/SelectInput";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { scale } from "react-native-size-matters";

const styles = {
  selectStyle: {
    paddingLeft: 5,
    fontSize: 14,
    color: "neutral.500",
    borderRadius: 8,
    marginBottom: 6,
    mt: 1,
    width: "48%",
    borderColor: "primary.50",
    bg: "primary.50",
  },
};

const statusBarHeight = getStatusBarHeight();

const HeaderFilterContainer = ({
  searchPlaceholder,
  searchHandler,
  selectPlaceholderOne,
  selectPlaceholderTwo,
  selectOptionHandler,
  selectOptionTwoHandler,
  disableSelectTwo,
  filterHandler,
  selectOptions = [],
  selectOptionsTwo = [],
  disableSelectOne,
  selectedValueOne,
  selectedValueTwo,
  showTopBar = true,
  doNotShowSelectInput = true,
  // doNotShowFilterInput,
}: any) => {
  return (
    <Box
      style={{ paddingTop: statusBarHeight, paddingBottom: scale(16) }}
      background="white.white"
    >
      {showTopBar  && (
        <TopBar
          filterHandler={filterHandler}
          searchHandler={searchHandler}
          placeholder={searchPlaceholder}
        />
      )}

     {doNotShowSelectInput 
     &&
     <HStack
        style={{
          paddingHorizontal: scale(16),
          paddingTop: showTopBar ? 0 : scale(16),
        }}
        flexDirection="row"
        width="100%"
        justifyContent="space-between"
      >
        <View style={{ width: "49%" }}>
          <SelectInput
            accessibilityLabel={selectPlaceholderOne}
            placeholder={selectPlaceholderOne}
            data={selectOptions}
            onValueChange={selectOptionHandler}
            isDisabled={disableSelectOne}
            selectedValue={selectedValueOne}
            variant="search"
            size="small"
          />
        </View>
        <View style={{ width: "49%" }}>
          <SelectInput
            isDisabled={disableSelectTwo}
            accessibilityLabel={selectPlaceholderTwo}
            placeholder={selectPlaceholderTwo}
            data={selectOptionsTwo}
            styles={styles.selectStyle}
            onValueChange={selectOptionTwoHandler}
            selectedValue={selectedValueTwo}
            size="small"
            variant="search"
          />
        </View>
      </HStack>}
    </Box>
  );
};

export default HeaderFilterContainer;
