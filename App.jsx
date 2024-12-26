import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './android/app/src/navigation/stackNavigator'
import AuthProvider from './src/context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
   <NavigationContainer>
    <MyStack/>
   </NavigationContainer>
   </AuthProvider>
  )
}

export default App

const styles = StyleSheet.create({})