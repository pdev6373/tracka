import React, {useState, useEffect} from "react";
import { View, Text, ScrollView, Share, Alert } from "react-native";
import {useMutation} from "react-query"
import Avatar from "../../../../components/Avatar";
import DateComponent from "../../../../components/DateComponent";
import { Need } from "../../../../types";
import { ThumbsUp } from "../../../../components/Vectors";
import { primaryColors } from "../../../../styles/Colors";
import styles from "./needdetailstyle";
import ButtonComponent from "../../../../components/Buttons/ButtonComponent";
import NeedStatusCard from '../../Components/NeedStatusCard';
import axios from "axios";
import { useVoteNeed } from "../../hooks/mutations/useNeeds";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import ShareHeader from "../../../../components/ShareHeader";
import { saveToStorage, getFromStorage } from "../../../../utils/storage";
interface NeedDetailsProps {
  route: any;
}
export default function NeedDetails({ route }: NeedDetailsProps) {
  const { need }: { need: Need } = route.params;

  const {mutate: voteNeedFunc, isLoading} = useVoteNeed();
  const [voted, setVoted] = useState("")
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        let status = await getFromStorage(`notification-status-${need?.id}`)
        if (!status) {
          setVoted("notVoted")
          saveToStorage(`notification-status-${need?.id}`, "notVoted")
      } else {
        setVoted(status)
      console.log(status)

      }
      }catch (e) {
        Alert.alert("Something went wrong. Please try again, and make sure you are connected to the internet.")
      }
  
    }
    fetchStatus()
  }, [])

  const Vote = () => {
    voteNeedFunc({
      communityId: need.id
    })
    setVoted("voted")
    saveToStorage(`notification-status-${need?.id}`, "voted")

  }

  console.log(voted)
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this needs under ${need.category} category in ${need.state} on Tracka mobile 2.0. (You can download the app from play store)`,
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
    <SafeAreaView style={{flex: 1}} > 
    <ShareHeader
        // isShowingInterest={isShowingInterest}
        // userIsInterested={userIsInterested}
        // onShowInterest={onShowInterestHandler}
        showInterest={false}
        onShare={onShare}
      />
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>{need.title}</Text>
        {!!need?.author && (
          <View style={styles.dateSection}>
            <Avatar name={need.author.name} />
            <DateComponent date={need.created_at} />
          </View>
        )}
        {need.description && (
          <View>
            <Text style={styles.description}>{need.description}</Text>
          </View>
        )}
        <View style={styles.infoSection}>
          <Text style={styles.infoHeading}>Category :</Text>
          <Text style={styles.info}>{need.category}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoHeading}>State :</Text>
          <Text style={styles.info}>{need.state}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoHeading}>L.G.A :</Text>
          <Text style={styles.info}>{need.localGovernment}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoHeading}>Community :</Text>
          <Text style={styles.info}>{need.community}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoHeading}>Representative :</Text>
          <Text style={styles.info}>{need.representative}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoHeading}>Status :</Text>
          <View style={styles.status}>
            <NeedStatusCard status={need.status} />
          </View>
        </View>

        <View style={styles.btn}>
          <ButtonComponent 
          style={{backgroundColor: voted === "voted" ? primaryColors.blue : primaryColors.white}}
          disabled={voted === "voted"}
          onPress={Vote}>
            <View style={styles.voteBtn}>
              <ThumbsUp fill={voted === "voted" ? primaryColors.white : primaryColors.lightBlue} />
              <Text style={[styles.voteBtnText, { color: voted === "voted" ?primaryColors.white : primaryColors.lightBlue}]}>Vote</Text>
            </View>
          </ButtonComponent>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
