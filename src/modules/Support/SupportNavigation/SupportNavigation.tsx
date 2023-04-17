import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ShareHeader from "../../../components/ShareHeader";
import routes from "../../../routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Support from "../Support"
import MoreSupport from "../MoreSupport";
import FeedBack from "../FeedBack";
// import Settings from "../Settings"
// import MoreSettings from "../MoreSettings/index";
// import Preference from "../Preference";
// import useHideBottomTab from "../../../hooks/useHideBottomTab";
// import State from "../Screens/State";

const Stack = createNativeStackNavigator();

const screenOptions = {
  // header: ShareHeader,
  headerMode: "screen",
  headerShown: false,
  headerStyle: {
    backgroundColor: "#fff",
  },
};

export default function SupportNavigation() {
  // useHideBottomTab({ navigation, route }, [routes.allocationStateOptions]);
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName={routes.support}
        screenOptions={screenOptions}
      >
         <Stack.Screen name={routes.support} component={Support} />
        <Stack.Screen name={routes.moresupport} component={MoreSupport} />
        {/* <Stack.Screen name={routes.feedback} component={MoreSupport} /> */}
        <Stack.Screen name={routes.feedback} component={FeedBack} /> 
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
