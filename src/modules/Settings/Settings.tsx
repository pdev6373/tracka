import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import styles from "./settingstyles"
import NavItem from "../../components/NavItem/index"
import { NavIconMapEnum } from "../../components/NavItem/NavItem";
import routes from "../../routes";
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"

const Settings = (props: {navigation: any}) => {
    const screenList = [
        {
            title: "Preference Manager",
            iconName: NavIconMapEnum.CHECKICON,
            route: routes.preference,
          },
          {
            title: "App Settings",
            iconName: NavIconMapEnum.SETTINGS,
            route: routes.moresettings,
          },
        ]

    const [activeRoute, setActiveRoute] = useState<string>("")
    const routeHandler = (route: string) => {
        setActiveRoute(route);
        props.navigation.navigate(route);
      };
  return (
     <View style={styles.container}> 

   <SimpleHeader heading="Settings" />
    <View >
     {screenList.map((screen) => (
        <NavItem
        {...screen}
      routeHandler={routeHandler}
      key={screen.title}
      isActive={activeRoute === screen.route}
      />
     )) }
    </View>
    </View>
 
  )
}

export default Settings
