import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Modal, FormControl} from "native-base"
import { primaryColors } from '../../styles/Colors'
import { Error } from '../Vectors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { scale } from 'react-native-size-matters'

const ErrorModal = () => {
  return (
          <Modal isOpen={false}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header> <Modal.CloseButton /></Modal.Header>
              <Modal.Body>
                <View style={styles.iconwrapper}> 
                <Error />
                </View>
                <Text style={styles.error}>Error</Text>
                <TouchableOpacity> 
                  <Text style={styles.tryagain}>Please try again</Text>
                </TouchableOpacity>
              </Modal.Body>
            </Modal.Content>
          </Modal>
  )
}

export default ErrorModal

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "red",
    },
    error: {
      textAlign: "center",
      paddingVertical: scale(10),
      color: primaryColors.blue,
      fontSize: 20,
    },
    tryagain: {
      textAlign: "center",
      paddingVertical: scale(10)
    },
    iconwrapper: {
      display: "flex",
      alignItems: "center",
    }
})