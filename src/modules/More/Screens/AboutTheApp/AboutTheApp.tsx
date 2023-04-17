import React from "react";
import { ScrollView, SafeAreaView, StatusBar, View } from "react-native";
import SimpleHeader from "../../../../components/SimpleHeader/SimpleHeader";
import NavItem from "../../../../components/NavItem";
import { primaryColors } from "../../../../styles/Colors";
import { NavIconMapEnum } from "../../../../components/NavItem/NavItem";
import routes from "../../../../routes";
import styles from "./abouttheappstyles";

const navItemList = [
  {
    title: "Terms and Conditions",
    iconName: NavIconMapEnum.FILE,
    route: routes.termsAndConditions,
  },
  {
    title: "About TrackaMobile App 2.0",
    iconName: NavIconMapEnum.INFO,
    route: routes.aboutTracka,
  },
];

export default function AboutTheApp(props: { navigation: any }) {
  const routeHandler = (route: string) => {
    props.navigation.navigate(route);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar
          animated={true}
          backgroundColor={primaryColors.backgroundColor}
          barStyle="dark-content"
          showHideTransition="fade"
        />
        <SimpleHeader heading="About the App" />
        <View>
          {navItemList.map((screen) => (
            <NavItem
              routeHandler={routeHandler}
              {...screen}
              key={screen.title}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
