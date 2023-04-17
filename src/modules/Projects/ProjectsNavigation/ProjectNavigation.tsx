import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
// import ShareHeader from "../../../components/ShareHeader";
import routes from "../../../routes";
import Projects from "../Projects";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {};

const singleScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

// const needDetailsScreenOptions = {
//   header: ShareHeader,
//   headerMode: "screen",
// };

export default function NeedNavigationStack() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName={routes.projectsMain}
        screenOptions={screenOptions}
      >
        <Stack.Screen
          options={singleScreenOptions}
          name={routes.projectsMain}
          component={Projects}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
