import React, { useState , useEffect} from "react";
import { View, FlatList, SafeAreaView, Alert } from "react-native";
import { Box, Fab, Icon } from "native-base";
import NaijaStates from "naija-state-local-government";
import { AntDesign } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import useNeeds from "../../hooks/query/useNeeds";
import routes from "../../../../routes";
import { Need, NeedParams } from "../../../../types";
import HeaderFilterContainer from "../../../../components/HeaderFilterContainer/HeaderFilterContainer";
import NeedCard from "../../Components/NeedCard";
import useSetupContext from "../../../Setup/hooks/useSetupContext";
import LoaderComponent from "../../../../components/Loader";
import formatParams from "../../../../utils/formatParams";
import NoData from "../../../../components/NoData";
import styles from "./needstyles";
import { getFromStorage } from "../../../../utils/storage";

interface NeedsProps extends NativeStackScreenProps<ParamListBase> {}

const stateSelectOptions = NaijaStates.states().map((s: string) => ({
  label: s,
  value: s,
}));

const allLgas = { value: "", label: "All Local government" };

const plusIcon = (
  <Icon color="white.white" as={<AntDesign name="plus" />} size="sm" />
);

export default function Needs({ navigation }: NeedsProps) {
  const { preference } = useSetupContext();
  const [category, setCategoryProps ] = useState("")
  const [refreshing, setRefreshing] = useState(false)
  const [sortByProps, setSortByProps] = useState()

  useEffect(() => {
    const FetchCategoies = async () => {
      const sortProps = await getFromStorage("needsortprops")
      setSortByProps(sortProps)
    }
    FetchCategoies()

  }, [])



  const [needParams, setNeedParams] = useState<NeedParams>({
    search: "",
    state: preference?.state,
    lga: "",
    category,
  });


  useEffect(() => {
    const FetchCategoies = async () => {
      const thisCategory = await getFromStorage("needscategories")
      setCategoryProps(thisCategory)
    }
    FetchCategoies()

  }, [])

 


  function searchHandler(search: string) {
    setNeedParams((prev: Record<string, any>) => ({
      ...prev,
      search,
    }));
  }

  function stateOptionHandler(state: string) {
    setNeedParams((prev) => ({
      ...prev,
      lga: "",
      state,
    }));
  }

  function lgaOptionHandler(lga: string) {
    setNeedParams((prev) => ({
      ...prev,
      lga,
    }));
  }

  const { data, isLoading, error } = useNeeds(
    formatParams({
      lga: needParams.lga?.toLowerCase(),
      state: needParams.state?.toLowerCase(),
      search: needParams.search?.toLowerCase(),
      category: category?.toLowerCase(),
      sortBy:sortByProps,
    })
  );

  if (error){
    Alert.alert("Something went wrong. Please try again, and make sure you are connected to the internet.")
  }


  function onNeedPressHandler(param: Need) {
    navigation.navigate(routes.needDetail, { need: param });
  }

  const renderNeedCards = ({ item }: { item: Need }) => (
    <NeedCard onPress={onNeedPressHandler} {...item} />
  );

  const filterHandler = () => {
    navigation.navigate(routes.needsFilter);
  };

  const createNeedHandler = () => {
    navigation.navigate(routes.createNeed);
  };

  const lgaSelectOptions = needParams.state
    ? NaijaStates.lgas(needParams.state)?.lgas?.map((l: string) => ({
        value: l,
        label: l,
      }))
    : [];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderFilterContainer
        filterHandler={filterHandler}
        selectOptions={stateSelectOptions}
        selectOptionsTwo={[allLgas, ...lgaSelectOptions]}
        selectOptionTwoHandler={lgaOptionHandler}
        selectPlaceholderTwo="Select L.G.A"
        selectPlaceholderOne="Select state"
        selectedValueOne={needParams?.state}
        selectedValueTwo={needParams?.lga}
        selectOptionHandler={stateOptionHandler}
        searchHandler={searchHandler}
        searchPlaceholder="Search communities, needs"
        disableSelectTwo={!lgaSelectOptions.length}
      />
      {isLoading && <LoaderComponent isLoading={isLoading} />}
      <View style={styles.container}>
        {!isLoading && !data?.rows.length && (
          <NoData
            heading="No Needs Found"
            lead="Please enter other search options"
          />
        )}
        <Fab
          onPress={createNeedHandler}
          right={scale(16)}
          bottom={scale(20)}
          icon={plusIcon}
          position="absolute"
          size={scale(56)}
          style={styles.addNeed}
          renderInPortal={false}
        />
        {!!data && !!data.rows.length && (
          <FlatList
            ListFooterComponent={<Box style={styles.spacer} />}
            style={styles.flatList}
            keyExtractor={(item, index) => `${item.id}${index}`}
            data={data.rows}
            renderItem={renderNeedCards}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
