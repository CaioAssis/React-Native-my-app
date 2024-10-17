// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2UFZpDRltF-eBMp5Yp06WImwWYZtxvCs",
  authDomain: "teste-fatec-native-paper-caio.firebaseapp.com",
  projectId: "teste-fatec-native-paper-caio",
  storageBucket: "teste-fatec-native-paper-caio.appspot.com",
  messagingSenderId: "121687340902",
  appId: "1:121687340902:web:cee2df74d154513fb67aa7",
  measurementId: "G-XC33KJJPVY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp