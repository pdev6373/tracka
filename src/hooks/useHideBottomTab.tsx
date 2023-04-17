import React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function useHideBottomTab(
  { navigation, route }: any,
  paths: string[]
) {
  const padding = useBottomTabBarHeight();
  React.useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (paths.includes(routeName || "")) {
      navigation.setOptions({
        tabBarVisible: false,
        tabBarStyle: { marginBottom: -padding },
      });
    } else {
      navigation.setOptions({
        tabBarVisible: true,
        tabBarStyle: { marginBottom: -2 },
      });
    }
  }, [navigation, paths, route]);
  return null;
}
