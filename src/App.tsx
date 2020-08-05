import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { 
  Notification, 
  setNotificationHandler, 
  addNotificationReceivedListener, 
  addNotificationResponseReceivedListener,
  NotificationResponse,
} from 'expo-notifications'

import registerForPushNotificationsAsync from './service/registerForPushNotificationsAsync' 

import Button from './components/Button'

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  })
})

const App = () => {
  useEffect(() => {
    registerForPushNotificationsAsync()
    addNotificationReceivedListener(handleNotification)
    addNotificationResponseReceivedListener(handleNotificationResponse)
  }, [])

  const handleNotification = (notification: Notification) => {
    console.log(notification)
  }

  const handleNotificationResponse = (notification: NotificationResponse) => {
    console.log(notification)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button>
        Hey!
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
})

export default registerRootComponent(App)
