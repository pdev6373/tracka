import React from "react";
import styles from "./componentStyle";
import { Box, Flex, HStack, Image, Text, Pressable } from "native-base";
import ChevronSvgComponent from "../../../components/Vectors/ChevronIcon";
import { useNavigation } from "@react-navigation/native";
import routes from "../../../routes";
import NumberFormat from 'react-number-format';
import {FederalIcon, StateIcon, LocalGovtIcon} from "../../../components/Vectors/index"

interface AllocationProps {
item: { 
  allocation_area: string, 
  allocation_type: string, 
  month: string, 
  net_allocation: number,
  state: string, 
  year: string
  lga: string;
  category: string
};
stateSelected: boolean;
lgSelected: boolean
}

interface DetailsProps {
    month: string,
    netAllocation: string,
    title: string,
    year: string,
}

export default function AllocationCard({item, stateSelected, lgSelected}: AllocationProps) {
  // console.log(item)

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(routes?.allocationInfo, {
      lga: item?.lga ? item?.lga : "",
      state: item?.state ? item?.state : "",
      federal: "Federal Allocation",
      month: item?.month,
      year: item?.year,
      stateSelected,
      lgSelected,
      // netAllocation: item?.netAllocation,
      netAllocation: item?.net_allocation

    });
  };

  const Location = () =>  {
    if (lgSelected) {
     return <Text numberOfLines={1} style={[styles.iconTitle]}>{item.lga}</Text>
    } else if (stateSelected) {
     return <Text numberOfLines={1} style={[styles.iconTitle]}>{item.state}</Text>
    } else {
     return <Text numberOfLines={1} style={[styles.iconTitle]}>Federal Allocation</Text>
    }
  }

  const DisplayIcon = () => {
    if (lgSelected) {
      return <LocalGovtIcon />

    }else if (stateSelected) {
      return <StateIcon />

    } else {
      return <FederalIcon />
    }
  }
  return (
    <Pressable onPress={onPress}>
      <Box style={[styles.listItem]}>
        <HStack space={3}>
          <Box>
            {DisplayIcon()}
          </Box>
          <Box>
            <Text numberOfLines={1} style={[styles.iconDateText]}>
              {item?.month}, {item?.year}
            </Text>
           {Location()}
          </Box>
        </HStack>
        <Box style={styles.spacer} />
        <Flex
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex direction="row">
            <Text style={[styles.amount]}>
            <NumberFormat
          value={Number(item?.net_allocation)}
          className="foo"
          displayType={'text'}
          thousandSeparator={true}
          // prefix={''}
          renderText={(value) => <Text>&#8358;{value}</Text>}
            />
              </Text>
          </Flex>
          <ChevronSvgComponent direction={"right"} width={40} />
        </Flex>
      </Box>
    </Pressable>
  );
}

export function AllocationInfoCard({item, formatText, getTotalAllocationPrice, year}) {
  return (
    <Box style={[styles.listItem]}>
      <Text
        numberOfLines={1}
        style={[styles.iconDateText, styles.iconDateText2]}
      >
        {formatText()}, {year}
      </Text>
      <Box style={styles.spacer} />
      <Flex direction="row">
        <Text style={styles.amount}><NumberFormat
          value={Number(getTotalAllocationPrice)}
          className="foo"
          displayType={'text'}
          thousandSeparator={true}
          // prefix={''}
          renderText={(value) => <Text>&#8358;{value}</Text>}
            /></Text>
     
      </Flex>
    </Box>
  );
}

export function AllocationItem({item}: AllocationProps) {
  return (
    <Flex style={[styles.item]}>
      <Box>
        <Text style={styles.itemMonth}>{item?.month}</Text>
        <Text style={styles.itemYear}>{item?.year}</Text>
      </Box>
      <Text style={styles.itemAmount}><NumberFormat
          value={Number(item?.net_allocation)}
          className="foo"
          displayType={'text'}
          thousandSeparator={true}
          // prefix={''}
          renderText={(value) => <Text>&#8358;{value}</Text>}
            /></Text>
    </Flex>
  );
}
