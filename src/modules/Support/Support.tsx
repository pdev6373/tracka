import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import styles from "./supportstyles"
import NavItem from "../../components/NavItem/index"
import { NavIconMapEnum } from "../../components/NavItem/NavItem";
import routes from "../../routes";
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"

const Support = (props: {navigation: any}) => {
    const screenList = [
        {
            title: "Feedback",
            iconName: NavIconMapEnum.FEEDBACKS,
            route: routes.feedback,
          },
          {
            title: "Support",
            iconName: NavIconMapEnum.SUPPORT,
            route: routes.moresupport,
          },
        ]

    const [activeRoute, setActiveRoute] = useState<string>("")
    const routeHandler = (route: string) => {
        setActiveRoute(route);
        props.navigation.navigate(route);
      };
  return (
     <View style={styles.container}> 

   <SimpleHeader heading="Support" />
   <Text style={styles.text}>How can we help you?</Text>
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

export default Support
