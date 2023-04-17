import React, { useState, useCallback } from "react";
import { SafeAreaView, FlatList, RefreshControl, View } from "react-native";
import { Modal, Text, Box, ScrollView, Pressable, Center } from "native-base";

import mockData from "../../mock";
import styles from "./detailStyle";
import { SelectDropdown } from "../../../../components/Input/Select/Select";
import { AllocationInfoCard } from "../../Components/AllocationCard";
import Header from "../../../../components/Headers/Header";
import Chart from "../../../../components/CustomChart";

interface StateProps {
  navigation: any;
  routes: any;
}
const State = (props: StateProps) => {
  const stateData = [
    { label: "Anambra State", value: "anambra_state" },
    { label: "Ondo State", value: "ondo_state" },
  ];

  return (
    <SafeAreaView style={[styles.container]}>
      <Header title={'States'} />
      <Box style={[styles.filter]}>
        <SelectDropdown
          placeholder={"2020"}
          options={stateData}
          width={"100%"}
          onSelect={() => {}}
          disabled
        />
      </Box>
      <ScrollView
        style={[styles.content]}
        showsHorizontalScrollIndicator={false}
      >
        <Box style={[styles.whiteBox]}>
          <Pressable style={[styles.stateBox]}>
            <Text style={[styles.stateBoxText]}>2019</Text>
          </Pressable>

          <Pressable style={[styles.stateBox, styles.stateBoxActive]}>
            <Text style={[styles.stateBoxText]}>2018</Text>
          </Pressable>

          <Pressable style={[styles.stateBox]}>
            <Text style={[styles.stateBoxText]}>2017</Text>
          </Pressable>
        </Box>
        <View style={[styles.spacer]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default State;
