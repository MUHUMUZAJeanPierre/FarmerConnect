// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDTcI3RNYHjcGi3Ave1LPy4CEapoCIvz1w",
  authDomain: "farmerone-9cf92.firebaseapp.com",
  projectId: "farmerone-9cf92",
  storageBucket: "farmerone-9cf92.appspot.com",
  messagingSenderId: "1089300438478",
  appId: "1:1089300438478:web:6c50cda1e0ab17967c5f9f",
  measurementId: "G-NZ3VCFEDL0"
};


const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const FIREBASE_AUTH = getAuth(app);
const FIREBASE_DB = getFirestore(app);
const storage = getStorage(app,"gs://farmerone-9cf92.appspot.com");

 export {app, FIREBASE_DB, FIREBASE_AUTH, storage}