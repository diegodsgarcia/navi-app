import React, { useState } from 'react'
import { View, Text, TextInput, Modal, StyleSheet, GestureResponderEvent } from 'react-native'
import Button from '../Button'

type Props = {
  visible: boolean
  onRequestClose?: () => void | null
  onRequestSend: (token: string) => void | undefined
}

export default ({ visible, onRequestClose, onRequestSend }: Props) => {
  const [token, setToken] = useState('')
  
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onRequestClose}
      >
      <View style={styles.container}>
        <Text style={styles.text}>Send here a notification</Text>
        <TextInput
          onChangeText={(text) => setToken(text)} 
          style={styles.input} 
          placeholder="Expo Code" 
        />
        <Button onPress={() => onRequestSend(token) }>Send</Button>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    borderColor: '#000',
    padding: 5,
  }
})