import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList, Pressable } from 'react-native';
import { Text, Box, Image } from 'native-base'
import { Icon } from 'react-native-elements';
import styles from '../TextField/textFieldStyles';

interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
}

const data = [
  { label: 'Anambra State', value: 'anambra_state' },
  { label: 'Ondo State', value: 'ondo_state' }
]

const PressableComponent = () => {
  return (
    <Box style={Styles.pressable} flexDirection='row'>
    <Text style={Styles.label}>
      Select
    </Text>
    <Icon type='ionicon' name='chevron-down' size={2} />
  </Box>
  )
}

const Styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#F0F8FB',
    borderRadius: 6,
    padding: 10,
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 16,
    letterSpacing: 1
  }
})

export default PressableComponent;
