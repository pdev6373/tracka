import React, { useState, useCallback, useEffect } from "react";
import axios from "axios"
import { SafeAreaView, FlatList, RefreshControl, View } from "react-native";
import { Text, Box } from "native-base";
import {useQuery} from "react-query"

import mockData from "../../mock";
import styles from "./allocationStyle";
import sharedStyles, {
  styleObject,
} from "../../../../styles/Generics/sharedStyle";
import { SelectDropdown } from "../../../../components/Input/Select/Select";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { scale } from "react-native-size-matters";
import AllocationCard, {
  AllocationInfoCard,
} from "../../Components/AllocationCard";
import Header from "../../../../components/Headers/Header";
import SelectInput from "../../../../components/Input/SelectInput";
import NaijaStates from "naija-state-local-government";
import HeaderFilterContainer from "../../../../components/HeaderFilterContainer/HeaderFilterContainer";
import Loader from "../../../../components/Loader";
import useAllocation from "../../hooks/query";
import formatParams from "../../../../utils/formatParams";
import { AllocationParams } from "../../../../types";
import NoData from "../../../../components/NoData";

type AllocationProps = {
  isFormComplete: boolean;
  handleSubmit: any;
  navigation: any;
};

const stateSelectOptions = NaijaStates.states().map((s: string) => ({
  label: s,
  value: s,
}));

const statusBarHeight = getStatusBarHeight();

const Allocation = (props: AllocationProps) => {
  const { navigation } = props;
  const [loadingAllocation, setLoadingAllocation] = useState(false)
  const [stateSelected,setStateSeleceted] = useState(false)
  const [lgSelected,setLgSeleceted] = useState(false)
  const [allocationParams, setAllocationParams] = useState<AllocationParams>({
    state: "",
    lga: "",
    category: "",
    year: "",
  }); 
  const [localGovtData, setLocalGovt] = useState([])
 useEffect(() => {
  const fetchAlloccation = async () => {
    try {
      setLoadingAllocation(true)
    const res = await axios.get(`http://budgitapi-env.eba-82vtvuzm.eu-west-2.elasticbeanstalk.com/index.php/lga-allocations?lga=${allocationParams.lga}&state=${allocationParams.state}`)
    setLocalGovt(res.data.allocations.data)
    setLoadingAllocation(false)
    } catch(e){
      setLoadingAllocation(false)
      console.log(e)
    }
    
  }
  fetchAlloccation()
 }, [allocationParams.state,allocationParams.lga])

 


  const {data, isLoading,} = useAllocation(formatParams({
    lga: allocationParams.lga.toLowerCase(),
    state: allocationParams.state.toLowerCase(),
    category: allocationParams.category.toLowerCase(),
    year: allocationParams.year.toLowerCase(),
  }))

  // console.log(data)




  function searchHandler(searchTerm: string) {
    setAllocationParams((prev) => ({
      ...prev,
      searchTerm,
    }));
  }

  function stateOptionHandler(state: string) {
    setAllocationParams((prev) => ({
      ...prev,
      state,
      lga: "",
    }));
    setStateSeleceted(true)
    setLgSeleceted(false)

  }

  function lgaOptionHandler(lga: string) {
    setAllocationParams((prev) => ({
      ...prev,
      lga,
    }));
    setStateSeleceted(false)
    setLgSeleceted(true)
  }

  const filterHandler = () => {
    navigation.navigate(routes.filter);
  };

  const lgaSelectOptions = allocationParams.state
    ? NaijaStates.lgas(allocationParams.state)?.lgas?.map((l: string) => ({
        value: l,
        label: l,
      }))
    : [];

  return (
    <SafeAreaView style={{ flex: 1, alignContent: "center",}}>
      <HeaderFilterContainer
        filterHandler={filterHandler}
        selectOptions={stateSelectOptions}
        selectOptionsTwo={lgaSelectOptions}
        selectOptionTwoHandler={lgaOptionHandler}
        selectPlaceholderTwo="Select L.G.A"
        selectPlaceholderOne="Select state"
        selectOptionHandler={stateOptionHandler}
        searchHandler={searchHandler}
        searchPlaceholder="Search communities, needs"
        disableSelectTwo={!lgaSelectOptions.length}
        showTopBar={false}
        doNotShowFilterInput={true} 
      />
      {loadingAllocation && <Loader isLoading={loadingAllocation} />}
      <View style={{flex: 1, paddingTop: 10}}> 

      {!loadingAllocation && !localGovtData.length && (
          <NoData
            heading="No Allocation Found"
            lead="Click on other areas"
          />
        )}
      {!!localGovtData.length && !loadingAllocation && <FlatList
        data={localGovtData}
        ListFooterComponent={<Box style={styles.spacer} />}
        renderItem={({ item }) => (
          <Box style={[styles.content]} key={item.id}>
            <AllocationCard item={item} stateSelected={stateSelected} lgSelected={lgSelected} />
          </Box>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={[styles.spacer]} />}
        showsHorizontalScrollIndicator={false}
      />}
      </View>

    </SafeAreaView>
  );
};

export default Allocation;
