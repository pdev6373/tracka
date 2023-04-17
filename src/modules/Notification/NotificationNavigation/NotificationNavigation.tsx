import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import Notification from "../Screens/Notification";
import SimpleHeader from "../../../components/SimpleHeader/SimpleHeader";
import routes from "../../../routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { primaryColors } from "../../../styles/Colors";
import { View } from "native-base";
import { Text } from "react-native";
import styles from "../NotificationComponent/style";

const Stack = createNativeStackNavigator();

const singleScreenOptions: NativeStackNavigationOptions = {
  header: () => (
    <View style={styles.headerWrapper}> 
      <Text style={styles.notificationText}>Notification</Text>
    </View>
  ),
};

export default function NotificationNavigation() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
          options={singleScreenOptions}
          name={routes.notification}
          component={Notification}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
