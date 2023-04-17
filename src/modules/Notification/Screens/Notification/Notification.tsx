import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, StatusBar, View, Text, Alert } from "react-native";
import { LargeBell } from "../../../../components/Vectors";
import { primaryColors } from "../../../../styles/Colors";
import styles from "./notificationstyles";
import NavigationComponent from "../../NotificationComponent/NotificationComponent"
import { getNotificationInbox } from 'native-notify';
import { getFromStorage, saveToStorage } from "../../../../utils/storage";
import { NOTIFICATION_LIST_KEY } from "../../../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage"
import useProjectNotificationfrom from "../../../Projects/hooks/query/useProjectNotification";
import useGetProjectById from "../../../Projects/hooks/query/useGetProjectById";
import formatParams from "../../../../utils/formatParams";
import Loader from "../../../../components/Loader";

export default function AboutTracka() {
  
  const { data: projectData, isLoading ,error } = useProjectNotificationfrom(formatParams({
  }))

  if (error){
    Alert.alert("Something went wrong. Please try again, and make sure you are connected to the internet.")
  }

  const [unreadMessage, setUnreadMessage] = useState([])
  useEffect(() => {
    const Save = async () => {
    saveToStorage(`unreadmessages`, JSON.stringify(unreadMessage))
    }
    Save()

  }, [unreadMessage])

//  console.log(unreadMessage)

 useEffect(() => {
  const Save = async () => {
   let data = await getFromStorage(`unreadmessages`)
  //  console.log(data)
  }
  Save()

}, [unreadMessage])

 

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
        <StatusBar
          animated={true}
          backgroundColor={primaryColors.white}
          barStyle="dark-content"
          showHideTransition="fade"
        />
      {/* </ScrollView> */}
       {isLoading && <Loader isLoading={isLoading} />}
     {!isLoading && !projectData?.length &&
     
     <View style={styles.wrapper}>
        <LargeBell fill={primaryColors.blue} />
        <Text style={styles.lead}>No Notifications</Text>
        <Text style={styles.desc}>
          You do not have any notifications at the moment
        </Text>
      </View>
}
     {!!projectData?.length && !isLoading &&<ScrollView style={styles.scrollView}>
        {projectData && projectData?.map((data: any) => (
          <NavigationComponent setUnreadMessage={setUnreadMessage} data={data} key={data?.id} />
        ))}
      </ScrollView>}
    </SafeAreaView>
  );
}
