import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'


import Button from './components/Button'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button>
        Hey!
      </Button>
    </View>
  );
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
