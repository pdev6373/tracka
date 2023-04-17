import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Needs from "../../modules/Needs/NeedNavigation";
import NotificationNavigation from "../../modules/Notification/NotificationNavigation";
import MoreScreen from "../../modules/More/Screens/MoreScreen";
import routes from "../../routes";
import navigationScreenOptions from "./NavigationScreenOptions";
import AllocationNavigationStack from "../../modules/Allocation/AllocationNavigation";
import ProjectNavigationStack from "../../modules/Projects/ProjectsNavigation";

export default function MainBottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      // initialRouteName={routes.need}
      screenOptions={navigationScreenOptions}
    >
      <Tab.Screen name={routes.projects} component={ProjectNavigationStack} />
      <Tab.Screen name={routes.need} component={Needs} />
      <Tab.Screen
        name={routes.allocation}
        component={AllocationNavigationStack}
      />
      <Tab.Screen
        name={routes.notification}
        component={NotificationNavigation}
      />
      <Tab.Screen name={routes.more} component={MoreScreen} />
    </Tab.Navigator>
  );
}
