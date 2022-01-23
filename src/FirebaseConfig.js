import { initializeApp } from "firebase/app";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDrVrcfnlQ9gqKRyTUaWG5qnsECORLx_OA",
    authDomain: "msg-app-92d50.firebaseapp.com",
    projectId: "msg-app-92d50",
    storageBucket: "msg-app-92d50.appspot.com",
    messagingSenderId: "547601255653",
    appId: "1:547601255653:web:6280127912f3b3f076180c",
    measurementId: "G-39XLQ0HS8L"
};

const app = initializeApp(config);

export default app;