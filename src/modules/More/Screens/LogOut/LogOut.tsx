import React, { useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { View } from "native-base";
import FadeInAndOut from "../../../../components/FadeInAndOut";
import { TrackaMobile } from "../../../../components/Vectors";
import { primaryColors } from "../../../../styles/Colors";
import useAuthContext from "../../../Auth/hooks/useAuthContext";
import styles from "./logoutstyles";
import routes from "../../../../routes";

export default function LogOut(props: { navigation: any }) {
  const { logout, isAuthenticated } = useAuthContext();

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1100);
    if (!isAuthenticated) {
      props.navigation.navigate(routes.login);
    }
  }, [isAuthenticated, logout, props.navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={primaryColors.backgroundColor}
        barStyle="light-content"
        showHideTransition="fade"
      />
      <View style={styles.wrapper}>
        <FadeInAndOut duration={1000}>
          <TrackaMobile />
        </FadeInAndOut>
      </View>
    </SafeAreaView>
  );
}
