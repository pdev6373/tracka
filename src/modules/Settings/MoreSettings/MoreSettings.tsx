import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleHeader from "../../../components/SimpleHeader/SimpleHeader"
import styles from "./moresettingstyles"
import NotificationComponent from  "../NotificationComponent/Notifications"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { primaryColors } from '../../../styles/Colors'
import { ScrollView } from 'native-base'
import NotificationList from "./NotificationList"

const MoreSettings = () => {
  return (
      <SafeAreaView style={styles.container}>
      <SimpleHeader heading="App Settings" />
      <ScrollView style={styles.container}> 
      <Text style={styles.text}>
            Allow TrackMobile 2.0 to access
      </Text>
      {NotificationList.slice(0, 1).map(data => (
          <NotificationComponent 
          Icon={()=> <MaterialCommunityIcons name="map-marker-outline"  size={30} color={primaryColors.lightBlue} />}
          title={data.title}
          id={data.id}
          key={data.id}

          />
        ))}
        
        <View> 
        <Text style={styles.text}>
            Push Notification
        </Text>
        {NotificationList.slice(1, 4).map(data => (
          <NotificationComponent 
          title={data.title}
          id={data.id}
          key={data.id}
          />
        ))}
        
        </View>
        <View> 
        <Text style={styles.text}>
            Email Notification
        </Text>
          {NotificationList.slice(4).map(data => (
          <NotificationComponent 
          title={data.title}
          id={data.id}
          key={data.id}
          />
        ))}
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default MoreSettings
