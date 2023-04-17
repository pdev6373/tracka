import React, { useState } from "react";
import { View, FlatList, SafeAreaView, Alert } from "react-native";
import { Box, Fab, Icon } from "native-base";
import NaijaStates from "naija-state-local-government";
import { AntDesign } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import useNeeds, { useSubmittedNeeds, useVotedNeeds } from "../../hooks/query/useNeeds";
import routes from "../../../../routes";
import { Need, NeedParams } from "../../../../types";
import HeaderFilterContainer from "../../../../components/HeaderFilterContainer/HeaderFilterContainer";
import NeedCard from "../../Components/NeedCard";
import useSetupContext from "../../../Setup/hooks/useSetupContext";
import LoaderComponent from "../../../../components/Loader";
import formatParams from "../../../../utils/formatParams";
import NoData2 from "../../../../components/NoData2";
import styles from "./submittedneedstyles";

const stateSelectOptions = NaijaStates.states().map((s: string) => ({
  label: s,
  value: s,
}));

const allLgas = { value: "", label: "All Local government" };

const plusIcon = (
  <Icon color="white.white" as={<AntDesign name="plus" />} size="sm" />
);

interface NeedsProps {
  navigation: any, 
  NeedParams: any
}

export default function Needs({ navigation, NeedParams }: NeedsProps) {
  const { preference } = useSetupContext();

  const { data, isLoading, error } = useSubmittedNeeds(
    formatParams({
      lga: preference.lga?.toLowerCase(),
      state: preference.state?.toLowerCase(),
      search: NeedParams.searchTerm,
    })
  );

  if (error){
    Alert.alert("Something went wrong. Please try again, and make sure you are connected to the internet.")
  }

 
  function onNeedPressHandler(param: Need) {
    navigation.navigate(routes.need, {
      screen: routes.needDetail,
      params: { need : param}
     });
  }

  const renderNeedCards = ({ item }: { item: Need }) => (
    <NeedCard onPress={onNeedPressHandler} {...item} />
  );



  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading && <LoaderComponent isLoading={isLoading} />}
      <View style={styles.container}>
        {!isLoading && !data?.rows.length && (
          <NoData2
            heading="No Submitted Needs"
            lead="You have not submitted any community need."
            report={() => navigation.navigate(routes.need)}
          />
        )}
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
