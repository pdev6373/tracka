import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
const OffIcon = require("../../../assets/icon/Off.png")
const OnIcon = require("../../../assets/icon/On.png")

import {SwitchOn, SwitchOff} from "../../../components/Vectors/index"
import { primaryColors } from "../../../styles/Colors";
import { scale} from "react-native-size-matters"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { saveToStorage, getFromStorage } from "../../../utils/storage";


interface NotificationProps {
  Icon?: any
  title: string;
  id: number
}


const NotificationComponent = ({ Icon,title,id}: NotificationProps) => {
  const [status, setStatus] = useState("")
  useEffect(() => {
    const fetchStatus = async () => {
        let status = await getFromStorage(`notification-status-${id}`)
        if (!status) {
            setStatus("ON")
            saveToStorage(`notification-status-${id}`, "ON")
        }else {
        setStatus(status)
        }
    }

    fetchStatus()
  }, [])

  const clickNotification = () => {
   
    if (status === "ON") {
      setStatus("OFF")
      saveToStorage(`notification-status-${id}`, "OFF")
    } else {
      setStatus("ON")
      saveToStorage(`notification-status-${id}`, "ON")
    }
  }
  return (
    <View style={styles.container}>
      <View style={[styles.containerLeft, {width: Icon ? scale(100) : scale(200)}]}> 
        {Icon && <Icon />}
      <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity onPress={clickNotification}> 
      {status === "ON" ? 
        <SwitchOn  />
       : 
        <SwitchOff  />
       }
      </TouchableOpacity>

    </View>
  )
}

export default NotificationComponent

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#FFF",
    paddingVertical: scale(20),
    paddingHorizontal: scale(10),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: { 
    color: primaryColors.lightBlue,
    width: 200,
    marginLeft: 10,
  }

})
