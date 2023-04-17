import React, { useState } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InterestedProject from '../../Projects/InterestedProject';
import {View, Text, StyleSheet} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../../components/Vectors";
import { primaryColors } from "../../../styles/Colors";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { scale } from "react-native-size-matters"
import { useNavigation } from '@react-navigation/native';
import routes from "../../../routes";
import useSetupContext from "../../Setup/hooks/useSetupContext";
import TopBar from "../../../components/TopBar";
// import {useNavigation} from "react-native/navigation"
import InterestedNeeds from "../../Needs/Screens/InterestedNeeds/InterestedNeeds";
import SubmittedNeeds from "../../Needs/Screens/SubmittedNeeds/SubmittedNeeds"
import { TouchableOpacity } from "react-native-gesture-handler";
export default function TopNavigation() {
  const navigation = useNavigation();
const Tab = createMaterialTopTabNavigator();
const { preference } = useSetupContext();
const [showSearch, setShowSearch] = useState(false)

  const [NeedParams, setNeedParams] = useState({
    searchTerm: "",
    state: preference?.state,
    lga: "",
  });

const filterHandler = () => {
    navigation.navigate(routes.filter);
  };

function searchHandler(searchTerm: string) {
  setNeedParams((prev:any) => ({
      ...prev,
      searchTerm,
    }));
  }

  return (
      <SafeAreaView style={{flex: 1}}>
          <View style={showSearch ? Styles.barOption : Styles.barOptionWithoutSearch}> 
          <TouchableOpacity onPress={() => {
            if (showSearch) {
              setShowSearch(prev => !prev)
            } else {
              navigation.goBack()
            }
          }}> 
          <AntDesign name="arrowleft" size={24} color={primaryColors.blue} />
          </TouchableOpacity>
          {
            showSearch ?
                <TopBar 
                filterHandler={filterHandler}
                searchHandler={searchHandler}
                placeholder="Search needs"
                DonotShowFilterButton={true}
                />
                :
                <Text style={Styles.barOptionText}>Your Needs</Text>
          }
         <TouchableOpacity onPress={() => setShowSearch(prev => !prev)}> 
         <EvilIcons name="search" size={24} color={primaryColors.blue} />
         </TouchableOpacity>
         
          </View>
      
         
    <Tab.Navigator
    
          screenOptions={{
            tabBarActiveTintColor: primaryColors.darkBlue,
            tabBarLabelStyle: {
              "fontSize": 14
            },
            tabBarIndicatorStyle: {
              backgroundColor: primaryColors.blue,
              height: 2
            },
            tabBarStyle: {
              backgroundColor: primaryColors.white
            }
          }}
         
       
    >
      <Tab.Screen
     
      name="Submitted Needs" children={() => <SubmittedNeeds navigation={navigation} NeedParams={NeedParams} />} />
      <Tab.Screen name="Voted Needs" children={() => <InterestedNeeds navigation={navigation} NeedParams={NeedParams} />} />
    </Tab.Navigator>
    </SafeAreaView> 

  );
}

const Styles = StyleSheet.create({
    barOption: {
        backgroundColor: primaryColors.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: scale(10),
        paddingHorizontal: scale(30),
        alignSelf: "center",
    },
    barOptionWithoutSearch: {
      backgroundColor: primaryColors.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingVertical: scale(30),
      paddingHorizontal: scale(20),
    
  },
    barOptionText: {
        color: primaryColors.blue,
        fontWeight: "400",
        fontSize: 16,
    }
})