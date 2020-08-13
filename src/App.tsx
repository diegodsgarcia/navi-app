import React, { useState, useEffect } from 'react'
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

import { registerForPushNotificationsAsync, sendNotification } from './service/notifications'

import Navi from './components/Navi'
import Modal from './components/Modal'
import Button from './components/Button'
import Text from './components/Text'

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  })
})

const App = () => {
  const [token, setToken] = useState<{expoPushToken: string}>({expoPushToken: 'Listen...'})
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    registerForPushNotificationsAsync().then(setToken)
    addNotificationReceivedListener(handleNotification)
    addNotificationResponseReceivedListener(handleNotificationResponse)
  }, [])

  const handleNotification = (notification: Notification) => {
    console.log(notification)
  }

  const handleNotificationResponse = (notification: NotificationResponse) => {
    console.log(notification)
  }

  const sendRequestNotification = (body: {to: string, title: string, body: string}) => {
    setOpenModal(false)
    sendNotification(body)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        visible={openModal}
        token={token.expoPushToken}
        onRequestClose={() => setOpenModal(false)}
        onRequestSend={sendRequestNotification} 
      />
      <Navi />
      <Button onPress={() => setOpenModal(true)}>
        Hey!
      </Button>
      <Text>{token.expoPushToken}</Text>
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
