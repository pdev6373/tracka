import React, { useState, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  Share, 
  ActivityIndicator
} from "react-native";
import { Image } from "native-base";
import * as Linking from "expo-linking";
import { primaryColors } from "../../../../styles/Colors";
import ShareHeader from "../../../../components/ShareHeader";
import styles from "./projectdetailstyle";
import StatusCard from "../../../../components/StatusCard";
import {
  Assignment,
  Bookmark,
  Email,
  Location,
  Message,
  Phone,
} from "../../../../components/Vectors";
import Button from "../../../../components/Buttons/ButtonComponent";
import routes from "../../../../routes";
import { ProjectInterface } from "../../../../types/Projects";
import { digitSeparator } from "../../../../utils/digitSeparator";
import { useInterestProject } from "../../hooks/mutation/useProjectMutation";
import useSetupContext from "../../../Setup/hooks/useSetupContext";
import Toast from "react-native-toast-message";
import useGetNewProject from "../../hooks/query/useNewProject";
import axios from "axios";

export default function ProjectDetails(props: { navigation: any; route: any }) {
  const [project, setProject] = useState<ProjectInterface>(
    {} as ProjectInterface
  );
  const [loading, setLoading] = React.useState(false)

  console.log(props.route)

  const { data: projectNewData, isLoading: isLoadingNew, error:NewError, refetch} = useGetNewProject();

  // console.log(projectNewData)

  const report = () =>
    props.navigation.navigate(routes.reportProject, { projectId: project?.id, });

  const params = props.route?.params;
  console.log(params, "----------")

  useEffect(() => {
    console.log(params)
    if (params?.project) {
      setProject(params?.project);
    }
  }, [params?.project]);

  const filterParams = params?.filterParams;

  if (!project) {
    props.navigation.navigate(routes.projects);
  }


  const { mutate: showInterest, isLoading: isShowingInterest } =
    useInterestProject(filterParams);

  const { addToInterest, projectInterests } = useSetupContext();

  const userIsInterested = projectInterests.includes(project?.id);

  const onShowInterestHandler = () => {
    showInterest(
      { projectId: project?.id },
      {
        onSuccess: () => {
          Toast.show({
            type: "success",
            text1: "Project added to your interests",
          });
          addToInterest(project?.id);
          setProject((prev) => ({
            ...prev,
            subscriberCount: Number(prev?.subscriberCount) + 1,
          }));
        },
      }
    );
  };

  const [projectFromUrl, setProjectFromParams] = useState<ProjectInterface>()
  // const [loading, setLoading] = React.useState(true)

  console.log(props.route.params.id)

  React.useEffect(() => {
    const fetchData = async () => {
      if (!params?.project) {
        setLoading(true)
        const res = await axios.get(`https://budgit-project.herokuapp.com/projects/${props?.route.params?.id}`)
        setProject(res.data.data)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handlePress = (href: string) => {
    Linking.openURL(href);
  };

  const onShare = async () => {
    try {
        // const payload = {
        //   dynamicLinkInfo: {
        //     domainUriPrefix: "https://trackamobile.page.link",
        //     link: `https://https://trackmobile-push-notification.web.app`,
        //     androidInfo: {
        //       androidPackageName: "com.yourbudgit.trackamobile",
        //     },
        //     socialMetaTagInfo: {
        //       socialTitle: "Testing the title",
        //       socialDescription: "Testing the description",
        //       socialImageLink: "https://lh3.googleusercontent.com/ogw/AOh-ky3QXxSluryhADbxGanI4EIdQUdASN5_8OW1DP05dA=s64-c-mo",
        //     }
        //   }
        // }
        // const key = "AIzaSyBUJNBa4OEygWqRA85rro9zXvtKGcxYiIY"

        // const url = `https://firebasedynamiclinks.googleapis.com/v1/shortinks?key=${key}`
        // const response = await fetch(url, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(payload)
        // })

        // const json = await response.json()
        // console.log(json)

  
      
      const result = await Share.share({
        message: `Check out this project: ${project.title} in ${project.state} with amount: ${project.amount} on Tracka mobile 2.0. You can download the app from play store with the link below. https://trackamobile.page.link/budgit`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          Toast.show({
            type: "success",
            text1: "Shared successfully",
            visibilityTime: 1000,
          });
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <>

    {
    
    loading ? 
    <View style={styles.container}> 

    <ActivityIndicator color={"gray"} style={{height: 100}}/>
    </View>

    : 
    // <Text>Rhis is the message</Text>
    <SafeAreaView style={styles.container}>
      <ShareHeader
        isShowingInterest={isShowingInterest}
        userIsInterested={userIsInterested}
        onShowInterest={onShowInterestHandler}
        onShare={onShare}
        showInterest={true}
      />
      <ScrollView>
        <StatusBar
          animated={true}
          backgroundColor={primaryColors.white}
          barStyle="dark-content"
          showHideTransition="fade"
        />
        <View style={styles.contentWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              alt="project banner"
              resizeMode="cover"
              style={styles.image}
              source={{
                uri:
                  project?.imageSrc ||
                  "https://res.cloudinary.com/budgit/image/upload/v1643875675/Image_1_ilwx9t.png",
              }}
            />
            <View style={styles.statusCard}>
              <StatusCard type="red">{project?.status}</StatusCard>
            </View>
          </View>
          <View style={styles.textContentWrapper}>
            <Text style={styles.heading}>{project.title}</Text>
            <View style={styles.reportSection}>
              <View style={styles.report}>
                <Bookmark fill={primaryColors.neutral_2} />
                <Text style={styles.reportText}>
                  {project.reportCount} Reports
                </Text>
              </View>
              <View style={styles.report}>
                <Assignment fill={primaryColors.neutral_2} />
                {!!project.subscriberCount && <Text style={styles.reportText}>
                  {project.subscriberCount} Interested
                </Text>}
              </View>
            </View>
            <Text style={styles.textSection}>
              Region: {project.region || project.state}
            </Text>
            <Text style={styles.textSection}>
              Amount: {digitSeparator(project?.amount)}
            </Text>
            <Text style={styles.textSection}>
              Agency: {project.agency || "N/A"}
            </Text>
            <Text style={styles.textSection}>
              Representative: 09054511306
              {/* Representative: {project?.representative?.name} */}
            </Text>

            <View style={styles.actionWrapper}>
              {/* {!!project?.representative?.phoneNumber && (
                <Pressable
                  onPress={() =>
                    handlePress(`tel:${project?.representative?.phoneNumber}`)
                  }
                >
                  <View style={styles.action}>
                    <Phone />
                    <Text style={styles.actionText}>Call Representative</Text>
                  </View>
                </Pressable>
              )} */}

              {/* {!!project?.representative?.phoneNumber && (
                <Pressable
                  onPress={() =>
                    handlePress(`sms:${project?.representative?.phoneNumber}`)
                  }
                >
                  <View style={styles.action}>
                    <Message />
                    <Text style={styles.actionText}>
                      Message Representative
                    </Text>
                  </View>
                </Pressable>
              )} */}
              {!!project?.representative?.email && (
                <Pressable
                  onPress={() =>
                    handlePress(`mailto: ${project?.representative?.email}`)
                  }
                >
                  <View style={styles.action}>
                    <Email />
                    <Text style={styles.actionText}>Email Representative</Text>
                  </View>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.reportActionSection}>
        <Pressable
          onPress={() =>
            Toast.show({
              type: "info",
              text1: "We are currently uploading location data",
              text2: "No project location data right now",
            })
          }
        >
          {/* <View style={styles.locationBtn}>
            <Location />
          </View> */}
        </Pressable>
        <View style={styles.reportBtn}>
          <Button variant="primary" label="Report project" onPress={report} />
        </View>
      </View>
    </SafeAreaView>
       
       }
    </>

  );
}
