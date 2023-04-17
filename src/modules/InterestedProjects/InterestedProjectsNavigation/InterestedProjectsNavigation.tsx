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
import ReportedProject from "../../Projects/ReportedProject";
import { TouchableOpacity } from "react-native-gesture-handler";
// import {useNavigation} from "react-native/navigation"

export default function TopNavigation() {
  const navigation = useNavigation();
const Tab = createMaterialTopTabNavigator();
const { preference } = useSetupContext();
const [showSearch, setShowSearch] = useState(false)

  const [projectParams, setProjectParams] = useState({
    searchTerm: "",
    state: preference?.state,
    lga: preference.lga,
    
  });

const filterHandler = () => {
    navigation.navigate(routes.filter);
  };
 

function searchHandler(searchTerm: string) {
    setProjectParams((prev: any) => ({
      ...prev,
      searchTerm,
    }));
  }

  return (
      <SafeAreaView style={{flex: 1}}>
          {<View style={showSearch ? Styles.barOption : Styles.barOptionWithoutSearch}> 
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
                placeholder="Search communities, needs"
                DonotShowFilterButton={true}
                />
                :
                <Text style={Styles.barOptionText}>Projects</Text>
          }
          <TouchableOpacity onPress={() => setShowSearch(prev => !prev)}> 
          <EvilIcons name="search" size={24} color={primaryColors.blue} />
          </TouchableOpacity>
          </View>}

         
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
     
      name="Interested" children={() => <InterestedProject navigation={navigation} projectParams={projectParams} />} />
      <Tab.Screen name="Reported" children={() => <ReportedProject navigation={navigation} projectParams={projectParams} />} />
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