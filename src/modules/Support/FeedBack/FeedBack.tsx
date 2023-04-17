import { SafeAreaView, StyleSheet, Text, View,  KeyboardAvoidingView, Platform} from 'react-native'
import {  Modal } from 'native-base'
import React, { useState } from 'react'
import SimpleHeader from "../../../components/SimpleHeader/SimpleHeader"
import styles from "./feedbackstyles"
// import NotificationComponent from  "../NotificationComponent/Notifications"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { primaryColors } from '../../../styles/Colors'

// import {Success} from "../../"
import {
    Success,
    Error
  } from "../../../components/Vectors/index"

// import NotificationList from "./NotificationList"
import {  ScrollView } from 'native-base'
import FeedbackForm from './FeedBackForm/index';
import ErrorModal from '../../../components/Modal/ErrorModal'
interface NotificationProps  {
id: number,
title: string,
alias: string,
}

const MoreSettings = () => {
    const [success, setSucces] = useState<boolean>(true)
    const [isError, setError] = useState<boolean>(true)
  return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1, backgroundColor: "#fff"}} >
      <SafeAreaView style={{flex: 1,}}>
      <SimpleHeader heading="Feedback" />
     {success ? 
      <ScrollView style={[styles.container, {backgroundColor: "#fff"}]}> 
      <Text style={styles.text}>
      Do you have questions or feedback for us? Please let us know
        </Text>
        <FeedbackForm  />
      </ScrollView>
    : 
    <View style={styles.successView}> 
        <View style={styles.iconView}> 
        <Success />
        </View>
        <Text style={styles.succesText}>Succesfully Submited</Text>
        <Text style={styles.succesText2}>You have sucessfully submitted your REQUEST for a new category and/or title.</Text>

    </View>  
    }
    {/* {isError && 
    <ErrorModal />
    } */}
    </SafeAreaView>
    </KeyboardAvoidingView>

  )
}

export default MoreSettings
