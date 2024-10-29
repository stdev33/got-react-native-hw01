import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "put-your-api-key-here",
  authDomain: "hw14reactnative.firebaseapp.com",
  databaseURL: "https://hw14reactnative.firebaseio.com",
  projectId: "hw14reactnative",
  storageBucket: "hw14reactnative.appspot.com",
  messagingSenderId: "sender-id",
  appId: "hw14reactnative",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const auth = getAuth(app);
export const db = getFirestore(app);
