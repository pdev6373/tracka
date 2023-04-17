import { Platform, SafeAreaView, StyleSheet, Text, View,  } from 'react-native'
import { KeyboardAvoidingView, Modal } from 'native-base'
import React, { useState } from 'react'
import SimpleHeader from "../../../components/SimpleHeader/SimpleHeader"
import styles from "./moresupportstyles"
// import NotificationComponent from  "../NotificationComponent/Notifications"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { primaryColors } from '../../../styles/Colors'
import {Picker} from '@react-native-picker/picker';


// import {Success} from "../../"
import {
    Success,
    Error
  } from "../../../components/Vectors/index"

// import NotificationList from "./NotificationList"
import {  ScrollView } from 'native-base'
import MoreSupportForm from './MoreSupportForm/index';
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
      <SimpleHeader heading="Support" />
     {success ? 
      <ScrollView style={[styles.container, {backgroundColor: "#fff"}]}> 
      <Text style={styles.text}>
      If you were unable to find a category and/or title of need kindly submit the details below for inclusion.
        </Text>
        <MoreSupportForm  />
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
    {isError && 
    <ErrorModal />
    }
    </SafeAreaView>
    </KeyboardAvoidingView>

  )
}

export default MoreSettings
