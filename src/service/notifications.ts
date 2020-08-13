import { Platform } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'
import axios from 'axios'

const registerForPushNotificationsAsync = async () => {
  let token = { expoPushToken: '' }

  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    let finalStatus = existingStatus

    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      finalStatus = status
    }

    if (finalStatus !== 'granted') {
      console.log('Failed to get push token for push notification!')
      return token
    }

    token.expoPushToken = await Notifications.getExpoPushTokenAsync()
    return token
  } else {
    console.log('Must use physical device for Push Notifications')
  }

  if (Platform.OS === 'android') {
    Notifications.createChannelAndroidAsync('default', {
      name: 'default',
      sound: true,
      priority: 'max',
      vibrate: [0, 250, 250, 250],
    })
  }

  return token
}

const sendNotification = async (body: { to: string, title: string, body: string }) => {
  const { data } = await axios.post('https://exp.host/--/api/v2/push/send', body)
  return data
}


export { registerForPushNotificationsAsync, sendNotification }