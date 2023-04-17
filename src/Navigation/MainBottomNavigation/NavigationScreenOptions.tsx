import React, { useEffect, useState } from "react";
import { RouteProp, ParamListBase } from "@react-navigation/native";
import styles from "./mainBottomNavigationStyles";
import routes from "../../routes";
import {View, Text} from "react-native"
import {
  ProjectIcon,
  AllocationIcon,
  Assignment,
  Notification,
  Dots,
} from "../../components/Vectors";
import { primaryColors } from "../../styles/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getFromStorage } from "../../utils/storage";

export default function navigationScreenOptions({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}) {  
  const [unReadNotification, setUnreadNotification] = useState([])

  useEffect(() => {
    const Save = async () => {
     let data = await getFromStorage(`unreadmessages`)
     let parsedData = {}
     if(data){
      parsedData = JSON.parse(data)
     }
     setUnreadNotification(parsedData)
    }
    Save()
  }, [])

  return {
    tabBarIcon: ({ focused }: { focused: boolean }) => {
      switch (route.name) {
        case routes.projects:
          return (
            <TouchableOpacity>
             <ProjectIcon
              fill={focused ? primaryColors.blue : primaryColors.neutral}
            />
            </TouchableOpacity>
          
          );
        case routes.allocation:
          return (
            <TouchableOpacity> 
               <AllocationIcon
              fill={focused ? primaryColors.blue : primaryColors.neutral}
            />
            </TouchableOpacity>
           
          );
        case routes.need:
          return (
            <TouchableOpacity> 
            <Assignment
              fill={focused ? primaryColors.blue : primaryColors.neutral}
            />
            </TouchableOpacity>
          );
        case routes.notification:
          return (
            <TouchableOpacity 
            style={{ position: 'relative', paddingHorizontal:10, paddingVertical:5}}
            >
              <View> 
{unReadNotification.length !== 0 &&
                <View style={{
              backgroundColor: "#DC2626", 
              width: 20,
              height: 15, 
              borderRadius: 7.5,
              zIndex: 5,
              elevation: 5,
              position: "absolute",
              top: -5,
              left: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
              
              }}>
              <Text style={{fontSize: 10,
                fontWeight: "bold", color: "white",}}>
                  <Text>
                  {unReadNotification.length > 9 ? <Text>9+</Text> : unReadNotification.length}</Text>
                  </Text>
             </View>
          }
                <Notification
                // style={{zIndex: 1, elevation: 1, }}
             
              fill={focused ? primaryColors.blue : primaryColors.neutral}
            />
  </View>
          
            </TouchableOpacity>
          );
        case routes.more:
          return (
            <TouchableOpacity> 
        <Dots fill={focused ? primaryColors.blue : primaryColors.neutral} />
            </TouchableOpacity>
          );
        default:
          return null;
      }
    },
    tabBarActiveTintColor: primaryColors.blue,
    tabBarInactiveTintColor: primaryColors.neutral,
    tabBarLabelStyle: styles.tabBarLabelStyle,
    headerShown: false,
    tabBarStyle: styles.tabBarStyle,
    animationEnabled: true,
    tabBarHideOnKeyboard: true
    // keyboardHidesTabBar: true
  };
}
