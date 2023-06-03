// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCDhKoI78m2-QhnnTtjJHjWb9HyUwqNgsU',
  authDomain: 'peerio-9ad88.firebaseapp.com',
  databaseURL: 'https://peerio-9ad88-default-rtdb.firebaseio.com',
  projectId: 'peerio-9ad88',
  storageBucket: 'peerio-9ad88.appspot.com',
  messagingSenderId: '477143120299',
  appId: '1:477143120299:web:5dbb55c96556a85fc1faee',
  measurementId: 'G-RP2SDT5G3Y',
}

console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const database = getDatabase(app)
const db = getFirestore(app)

export { analytics, database, db }
