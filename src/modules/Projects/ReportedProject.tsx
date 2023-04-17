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
import useGetReported from "./hooks/query/useGetReported";
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

const ReportedProjects = ({ navigation, projectParams }: ProjectsProps) => {
  const { preference } = useSetupContext();

  const {
    data: reportData,
    isLoading,
    error,
  } = useGetReported(
    formatParams({
      state: preference?.state?.toLowerCase(),
      search: projectParams?.searchTerm,
      area: preference?.lga?.toLowerCase(),
      limit: 20,
    })
  );

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
    <SafeAreaView style={{ flex: 1, alignContent: "center" }}>
      {isLoading && <Loader isLoading={isLoading} />}
      <View style={{ flex: 1 }}>
        {!isLoading && !reportData?.project?.length && (
          <NoData2
            heading="No Reported Project"
            lead="You have not made any reports on a project, yet."
            buttonText="View Projects"
            report={() => navigation.navigate(routes.projects)}
          />
        )}

        {!!reportData?.project?.length && !isLoading && (
          <FlatList
            style={styles.flatList}
            data={reportData?.project}
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
    </SafeAreaView>
  );
};

export default ReportedProjects;
