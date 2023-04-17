import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ShareHeader from "../../../components/ShareHeader";
import routes from "../../../routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Settings from "../index"
import MoreSettings from "../MoreSettings/";
import Preference from "../Preference";
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

export default function AllocationNavigationStack() {
  // useHideBottomTab({ navigation, route }, [routes.allocationStateOptions]);
  return (
    <SafeAreaProvider>
      <Stack.Navigator
      // options={screenOptions}
        initialRouteName={routes.settings}
        screenOptions={screenOptions}
      >
        <Stack.Screen name={routes.settings} component={Settings} />
        <Stack.Screen name={routes.moresettings} component={MoreSettings} />
        <Stack.Screen name={routes.preference} component={Preference} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
