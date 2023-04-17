// import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { pushNotificationToTray } from './notificationManager';

async function requestUserPNPermission() {
    // const authStatus = await messaging().requestPermission();
    // const enabled =
    //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    // if (enabled) {
    //   console.log('Authorization status:', authStatus);
    //   showPNMessage();
    //   setForegroundHandler();
    //   subscribeToTopic();
    // }
}

export async function showPNMessage(){
        // const unsubscribe = messaging().onMessage(async remoteMessage => {
        //   // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        //   pushNotificationToTray(remoteMessage['notification']['title'], remoteMessage['notification']['body'])
        // });
    
        // return unsubscribe;
}

// Register background handler
export async function setBackgroundHandler() {
    // messaging().setBackgroundMessageHandler(async remoteMessage => {
    //     // pushNotificationToTray(remoteMessage['notification']['title']+'=BG', remoteMessage['notification']['body'])
    // });
}

export async function subscribeToTopic() {
    // messaging()
    // .subscribeToTopic('trackaMobileUsers')
    // .then(() => console.log('Subscribed to topic!'));
}

export async function setForegroundHandler() {
    // messaging().onMessage(async remoteMessage=>{
    //     console.log('A new FCM message arrived!')
    //     console.log(JSON.stringify(remoteMessage))
    // });
}

export default requestUserPNPermission