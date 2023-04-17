import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import Needs from "../Screens/Needs";
import NeedDetails from "../Screens/NeedDetails";
import ShareHeader from "../../../components/ShareHeader";
import routes from "../../../routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {};

const singleScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const needDetailsScreenOptions = {
  // headerMode: "screen",
  headerShown: false,
};

export default function NeedNavigationStack() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName={routes.need}
        screenOptions={screenOptions}
      >
        <Stack.Screen
          options={singleScreenOptions}
          name={routes.need}
          component={Needs}
        />

        <Stack.Screen
          options={needDetailsScreenOptions}
          name={routes.needDetail}
          component={NeedDetails}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
 