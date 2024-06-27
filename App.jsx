import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging'

const App = () => {
  useEffect(() => {
    getDeviceToken();
  }, []);

  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log(token);
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!,', JSON.stringify(remoteMessage))
    })
  })

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})