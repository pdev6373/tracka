import React, { useState, useCallback, useEffect } from "react";
import { SafeAreaView, FlatList, RefreshControl, View , Share} from "react-native";
import { Modal, Text, Box, ScrollView, Pressable, Center } from "native-base";
import Toast from "react-native-toast-message";
import axios from "axios"

import mockData from "../../mock";
import styles from "./detailStyle";
import { SelectDropdown } from "../../../../components/Input/Select/Select";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { scale } from "react-native-size-matters";
import {
  AllocationInfoCard,
  AllocationItem,
} from "../../Components/AllocationCard";
import Header from "../../../../components/Headers/Header";
import Chart from "../../../../components/CustomChart";
import { SwipeablePanel } from 'rn-swipeable-panel';
import SelectInput from "../../../../components/Input/SelectInput";
import routes from "../../../../routes";
import useAllocation from "../../hooks/query";
import formatParams from "../../../../utils/formatParams";
import Loader from "../../../../components/Loader";
import CalendarData from "../../YearData"
import mock from "../../mock";
import { AllocationParams } from "../../../../types";
import { Select } from "../../../../components/Input";

type ProjectsProps = {
  isFormComplete: boolean;
  handleSubmit: any;
  navigation: any;
  route: any;
};

const Details = (props: ProjectsProps) => {

  const params = props.route.params
  const [loadingAllocation, setLoadingAllocation] = useState(false)
  const [allocationData, setAllocationData] = useState([])

  const formatText = () => {
    if (params.lgSelected) {
      return params.lga
    } else if (params.stateSelected){
      return params.state
    } else {
      return params.federal
    }
  }
  
  const [allocationParams, setAllocationParams] = useState<AllocationParams>({
    state: params.state.trim() ? params.state.trim() : "",
    lga: params.lga.trim() ? params.lga.trim() : "",
    category: "",
    year: params.year ? params.year : "",
  });



  // const {data, isLoading,} = useAllocation(formatParams({
  //   lga: allocationParams.lga.toLowerCase(),
  //   state: allocationParams.state.toLowerCase(),
  //   category: allocationParams.category.toLowerCase(),
  //   year: allocationParams.year.toLowerCase(),
  // }))

  useEffect(() => {
    const fetchAlloccation = async () => {
      try {
        setLoadingAllocation(true)
      const res = await axios.get(`http://budgitapi-env.eba-82vtvuzm.eu-west-2.elasticbeanstalk.com/index.php/lga-allocations?lga=${allocationParams.lga}&state=${allocationParams.state}&year=${allocationParams.year}`)
  
      setAllocationData(res.data.allocations.data)
      setLoadingAllocation(false)
  
      } catch(e){
        setLoadingAllocation(false)
        console.log(e)
      }
      
    }
    fetchAlloccation()
   }, [allocationParams.state,allocationParams.lga, allocationParams.year])



const allocationsData = allocationData.map((data: any) => Number(data.net_allocation))

const getTotalAllocationPrice = allocationsData?.reduce((accumulator: number, current: number) => {
  return accumulator + current 
}, 0)




const chart = allocationData.map((data: any) => ({
label: data.month.slice(0, 3),
value: Math.floor((500 * data.net_allocation) / getTotalAllocationPrice)
}))

  const [isPanelActive, setIsPanelActive] = React.useState(false);

  return (
    <SafeAreaView style={[styles.container]}>
      <Header title={ formatText()}/>
      {/* <Box style={[styles.filter]}>
        <SelectDropdown
          placeholder={params.year.trim()}
          options={CalendarData}
          width={"75%"}
          onSelect={(itemValue, initemIndex) => {
            setAllocationParams((prev: any) => ({
              ...prev,
              year: itemValue.label,
            }));
          }}
          // onTouch={() =>
          //   props.navigation.navigate(routes.allocationStateOptions)
          // }
          // disabled
        />
      </Box> */}
      <View style={{padding: 15}}> 
      <SelectInput 
      accessibilityLabel={params.year.trim()}
      placeholder={params.year.trim()}
      data={CalendarData}
      onValueChange={(state) => {
        setAllocationParams((prev: any) => ({
          ...prev,
          year: state,
        }));
      }}
      // selectedValue={selectedValueOne}
      variant="search"
      size="small"
      />
      </View>

      {
        !loadingAllocation &&
        <ScrollView showsHorizontalScrollIndicator={false}>
        <Box style={[styles.content]}>
          <AllocationInfoCard getTotalAllocationPrice={getTotalAllocationPrice.toFixed(2)} item={params} year={allocationParams.year} formatText={formatText} />
          <View style={[styles.spacer]} />
          <Chart data={chart} />
        </Box>
        <View style={[styles.spacer]} />
        <Pressable
          onPress={() => setIsPanelActive(true)}
          onTouchStart={() => setIsPanelActive(true)}
        >
          <View style={[styles.bottomPanel]}>
            <Center>
              <Box style={[styles.bottomPanelBar]} />
            </Center>
            <Box style={[styles.content]}>
              <Text style={[styles.bottomPanelTitle]}>Net Allocations</Text>
            </Box>
            {[...allocationData].splice(0, 3).map((item, index) => (
              <Box key={index}>
                <AllocationItem item={item}/>
                <Center style={[index <= 1 ? styles.bottomPanelBorder : {}]} />
              </Box>
            ))} 
          </View>
        </Pressable>
      </ScrollView>
}
    {  
    loadingAllocation ? <Loader isLoading={loadingAllocation}/>
    :
    <Modal
        style={{}}
        isOpen={isPanelActive}
        overlayVisible={false}
        backdropVisible={false}
      >
        <SwipeablePanel
          onlyLarge
          fullWidth
          onClose={() => setIsPanelActive(false)}
          isActive={isPanelActive}
        >
          <Box style={[styles.content]}>
            <Text style={[styles.bottomPanelTitle]}>Net Allocations</Text>
          </Box>
          {loadingAllocation && <Loader isLoading={loadingAllocation} />}
          {!!allocationData.length && !loadingAllocation && allocationData?.map((item: any, index: number) => { 
           return <Box key={index}>
             <AllocationItem item={item}/>
               <Center
                style={[
                  index <= mockData.allocations.length - 2
                    ? styles.bottomPanelBorder
                    : {},
                ]}
              />
            </Box>
})}
         
        </SwipeablePanel>
      </Modal>}
    </SafeAreaView>
  );
};

export default Details;
