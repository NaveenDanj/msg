// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrVrcfnlQ9gqKRyTUaWG5qnsECORLx_OA",
  authDomain: "msg-app-92d50.firebaseapp.com",
  projectId: "msg-app-92d50",
  storageBucket: "msg-app-92d50.appspot.com",
  messagingSenderId: "547601255653",
  appId: "1:547601255653:web:6280127912f3b3f076180c",
  measurementId: "G-39XLQ0HS8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;