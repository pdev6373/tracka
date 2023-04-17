import React, {useEffect, useState} from "react";
import { ScrollView, SafeAreaView, StatusBar, View, Text, TouchableOpacity, Alert } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";
import {Button } from "native-base";
import Timeago from "react-native-timeago"
import { saveToStorage, getFromStorage } from "../../../utils/storage";
import {useNavigation} from "@react-navigation/native"
import routes from "../../../routes";
import formatQueryParams from "../../../utils/formatQueryParams";
import useGetProjectById from "../../Projects/hooks/query/useGetProjectById";
import formatParams from "../../../utils/formatParams";
import useSetupContext from "../../Setup/hooks/useSetupContext";
import useGetSubscribe from "../../Projects/hooks/query/useGetSubscribe";

export default function NotificationComponent({data, setUnreadMessage}: any) {
    const navigation = useNavigation();
    const [status, setStatus] = useState("")
    const [button, setButton] = useState<Boolean>(false)
  const { preference } = useSetupContext();

  const {data: listOfSubscribers, isLoading: isLoadingSubscribers, error} = useGetSubscribe()
// console.log(listOfSubscribers)

if (error){
  Alert.alert("Something went wrong. Please try again, and make sure you are connected to the internet.")
}


const filteredData = !isLoadingSubscribers && listOfSubscribers !== null && listOfSubscribers?.project?.filter(project => project.id == data.objectId)

    // const [unreadMessages, setUnreadMessages] = useState([])

    // const { data: projectData, isLoading } = useGetProjectById(data?.objectId);

    const [projectParams, setProjectParams] = useState({
        searchTerm: "",
        state: preference?.state,
        lga: "",
      });
    
    useEffect(() => {
        const FetchRequest = async () => {
        if (status === "new") {
         
          setUnreadMessage(prev => [...prev, "newMessage"])
        }
    }
    FetchRequest()
    }, [status])

    // useEffect(() => {
    //     const fetchUnreadNotification = async () => {
    //      await saveToStorage(`unreadmessages`, JSON.stringify(unreadMessages))
       
    //         let status = await getFromStorage('unreadmessages')
    //         console.log(status)
    //     }
    //     fetchUnreadNotification()

    // }, [])
  


    useEffect(() => {
        const fetchStatus = async () => {
            let status = await getFromStorage(`notification-status-${data?.id}`)
            if (!status) {
                setStatus("new")
                saveToStorage(`notification-status-${data?.id}`, "new")
            }else {
            setStatus(status)
            }
        }

        fetchStatus()
      }, [])


      const PressNotification = () => {
        setButton(prev => !prev)
        setStatus("old")
         saveToStorage(`notification-status-${data?.id}`, "old")
         
      }
      const report = () => {
        navigation.navigate(routes.reportProject, { projectId: data?.objectId, })
      }

      const showInterest = () => {
        navigation.navigate(routes.projectDetails, {
            project: filteredData[0],
            filterParams: {
              ...formatParams({
                state: projectParams.state?.toLowerCase(),
                search: projectParams.searchTerm,
                area: projectParams.lga.toLowerCase(),
              }),
            },
          });
      }

  return (
    <TouchableOpacity style={styles.component} onPress={PressNotification}>
        {status === "new" && <View style={styles.indicator} /> }
        <View> 
        <Text style={styles.content}>{data.description}</Text>
        {
            button &&
            <TouchableOpacity style={styles.buttons}> 
                <Button
                variant="outline"
                borderColor="neutral"
                style={styles.interest}
                onPress={showInterest}
                >
                    Show Interest
                </Button>
                <Button 
                // colorScheme="neutral"
                // style={styles.report}
                onPress={report}
                >
                    Report
                </Button>
            </TouchableOpacity>
        }
            <Timeago time={data.createdAt}/>
        </View>
 
    </TouchableOpacity>
  );
}
