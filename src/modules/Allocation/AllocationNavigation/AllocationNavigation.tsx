import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ShareHeader from "../../../components/ShareHeader";
import routes from "../../../routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Allocation from "../Screens/Main";
import Details from "../Screens/Details";
// import useHideBottomTab from "../../../hooks/useHideBottomTab";
// import State from "../Screens/State";

const Stack = createNativeStackNavigator();

const screenOptions = {
  // header: ShareHeader,
  headerMode: "screen",
  headerShown: false,
  headerStyle: {
    backgroundColor: "red",
  },
};

export default function AllocationNavigationStack() {
  // useHideBottomTab({ navigation, route }, [routes.allocationStateOptions]);
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName={routes.allocations}
        screenOptions={screenOptions}
      >
        <Stack.Screen name={routes.allocations} component={Allocation} />

        <Stack.Screen name={routes.allocationInfo} component={Details} />

        {/* <Stack.Screen name={routes.allocationStateOptions} component={State} /> */}
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
