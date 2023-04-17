import React, { useState } from "react";
import { SafeAreaView, FlatList, Text, View, Alert } from "react-native";
import NaijaStates from "naija-state-local-government";
import { Box } from "native-base";
import ProjectHeader from "../../components/HeaderFilterContainer/HeaderFilterContainer";
import routes from "../../routes";
import Loader from "../../components/Loader";
import useSetupContext from "../Setup/hooks/useSetupContext";
import useProjects from "./hooks/query/useProject";
import ProjectCard from "./components/ProjectCard";
import formatParams from "../../utils/formatParams";
import styles from "./styles";
import TopBar from "../../components/TopBar";
import useGetSubscribe from "./hooks/query/useGetSubscribe";
import useGetReported from "./hooks/query/usegetReported";
import NoData2 from "../../components/NoData2";

type ProjectsProps = {
  navigation?: any;
  projectParams: any;
};

const stateSelectOptions = NaijaStates.states().map((s: string) => ({
  label: s,
  value: s,
}));

const allLgas = { value: "", label: "All Local government" };

const InterestedProjects = ({ navigation, projectParams }: ProjectsProps) => {
  const { preference } = useSetupContext();
  // console.log(preference)

  // const { data: projectData, isLoading } = useProjects(
  //   formatParams({
  //     state: projectParams.state?.toLowerCase(),
  //     search: projectParams.searchTerm,
  //     area: projectParams.lga.toLowerCase(),
  //     limit: 20,
  //   })
  // );

  const {
    data: subscribeData,
    isLoading,
    error,
  } = useGetSubscribe(
    formatParams({
      state: preference?.state?.toLowerCase(),
      search: projectParams?.searchTerm,
      area: preference?.lga?.toLowerCase(),
      limit: 20,
    })
  );

  console.log(subscribeData);

  if (error) {
    Alert.alert(
      "Something went wrong. Please try again, and make sure you are connected to the internet."
    );
  }

  function onPressHandler(params: any) {
    navigation.navigate(routes.projectDetails, {
      project: params,
      filterParams: {
        ...formatParams({
          state: preference?.state?.toLowerCase(),
          search: projectParams?.searchTerm,
          area: preference?.lga?.toLowerCase(),
        }),
      },
    });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Box>  */}

      {isLoading && <Loader isLoading={isLoading} />}
      <View style={{ flex: 1 }}>
        {!isLoading && !subscribeData?.project?.length && (
          <NoData2
            heading="No Interested Project"
            lead="You are not interested in any project, yet."
            buttonText="View Projects"
            report={() => navigation.navigate(routes.projects)}
          />
        )}
        {!!subscribeData?.project?.length && !isLoading && (
          <FlatList
            style={styles.flatList}
            data={subscribeData?.project}
            renderItem={({ item }) => (
              <ProjectCard {...item} onPressHandler={onPressHandler} />
            )}
            keyExtractor={(item) => `${item.id}`}
            ListFooterComponent={
              <Box style={styles.spacer}>
                <Box style={styles.spacer} />
                <Box style={styles.spacer} />
              </Box>
            }
          />
        )}
      </View>

      {/* <Box style={styles.spacer} /> */}
      {/* </Box> */}
    </SafeAreaView>
  );
};

export default InterestedProjects;
