import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Text,
  Animated,
  Pressable,
} from "react-native";
import { Box, Flex, Radio, ScrollView } from "native-base";
import { Back } from "../../../../components/Vectors";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { scale } from "react-native-size-matters";
import styles from "./filterstyle";
import { primaryColors } from "../../../../styles/Colors";
import { SelectDropdown } from "../../../../components/Input/Select/Select";
import Collapsable from "../../../../components/Collapsable/Collapsable";
import ChevronSvgComponent from "../../../../components/Vectors/ChevronIcon";

type ProjectsProps = {
  isFormComplete: boolean;
  handleSubmit: any;
  navigation: any;
};

const sortBy = [
  { label: 'Project title (A-Z)', value: 'Project title (A-Z)' },
  { label: 'Project title (Z-A)', value: 'Project title (Z-A)' },
  { label: 'Amount (Highest - Lowest)', value: 'Amount (Highest - Lowest)' },
  { label: 'Amount (Lowest - Highest)', value: 'Amount (Lowest - Highest)' },
];

const categories = [
  { label: 'Agriculture', value: 'Agriculture' },
  { label: 'Health', value: 'H' },
  { label: 'Ladi', value: 'L' },
  { label: 'Agriculture 3', value: 'Agriculture 3' },
  { label: 'Agriculture 4', value: 'Agriculture 4' },
  { label: 'Petroleum', value: 'Petroleum' },
  { label: 'Wal', value: 'Wal' },
];

const Filter = (props: ProjectsProps) => {
  const statusBarHeight = getStatusBarHeight();
  const navigateBack = () => props.navigation.goBack();
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <Box
          style={[
            styles.filter,
            {
              paddingTop: statusBarHeight + 16,
              height: scale(statusBarHeight + 58),
            },
          ]}
        >
          <>
            <TouchableWithoutFeedback onPress={navigateBack}>
              <View>
                <Back width={24} height={24} fill={primaryColors.neutral_2} />
              </View>
            </TouchableWithoutFeedback>
            <Text style={styles.heading}>Filter</Text>
          </>
        </Box>
        <View style={styles.filterWrapper}>
          <View>
            <Text style={styles.sectionHeader}>Sort by</Text>
            <Radio.Group
              accessibilityLabel="Pick your favorite number"
              name="sortBy"
              style={styles.section}
            >
              {sortBy.map((srt) => (
                <View style={styles.sectionTab}>
                  <Text style={styles.sectionTabLabel}>{srt.label}</Text>
                  <Radio accessibilityLabel={srt.value} value={srt.value} />
                </View>
              ))}
            </Radio.Group>
          </View>
          <View>
            <Text style={styles.sectionHeader}>Filter by</Text>

            <Collapsable
              style={[styles.section, { paddingVertical: 5 }]}
              title={({ open }) => {
                return (
                  <Flex
                    style={[styles.sectionTab]}
                    direction={'row'}
                    justify={'space-between'}
                  >
                    <Text>Status of Projects</Text>
                    <Flex direction={'row'} alignItems={'center'}>
                      <Text>All</Text>
                      <ChevronSvgComponent
                        direction={open ? 'down' : 'right'}
                      />
                    </Flex>
                  </Flex>
                );
              }}
            >
              {[...sortBy, ...sortBy].map((srt) => (
                <View style={[styles.sectionTab]}>
                  <Text style={styles.sectionTabLabel}>{srt.label}</Text>
                  <SelectDropdown
                    onSelect={alert}
                    options={sortBy}
                    width={'40%'}
                  />
                </View>
              ))}
            </Collapsable>
          </View>
          <View>
            <Text style={styles.sectionHeader}>Categories</Text>
            <Radio.Group
              accessibilityLabel="Pick your favorite number"
              name="sortBy"
              style={styles.section}
            >
              {categories.map((srt) => (
                <View key={srt.value} style={styles.sectionTab}>
                  <Text style={styles.sectionTabLabel}>{srt.label}</Text>
                  <Radio accessibilityLabel={srt.value} value={srt.value} />
                </View>
              ))}
            </Radio.Group>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filter;
