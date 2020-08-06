import React from 'react'
import { Text, StyleSheet } from 'react-native'

type Props = {
  children: React.ReactNode
}

export default ({ children }: Props) => (
  <Text style={styles.text}>{children}</Text>
)

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop: 30,
  }
})