/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import {PushNotification} from "react-native-push-notification"
// import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';


// PushNotification.configure({
//     onRegister: function (token) {
//         console.log("TOKEN:", token);
//     },

//     // (required) Called when a remote is received or opened, or local notification is opened
//     onNotification: function (notification) {
//         console.log("NOTIFICATION:", notification);
//     },
//     permissions: {
//         alert: true,
//         badge: true,
//         sound: true,
//     },
//     popInitialNotification: true,
//     requestPermissions: true,
// });

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

messaging().getInitialNotification(async remoteMessage => {
    console.log('Message handled in the kill state!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
