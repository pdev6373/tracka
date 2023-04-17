import * as Notifications from 'expo-notifications';

export async function pushNotificationToTray(title: any, body: any){
    Notifications.scheduleNotificationAsync({
        content: {
          title: title,
          body: body,
        },
        trigger: {
          seconds: 5,
        },
    });
}