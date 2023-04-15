import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDskVmL2DiuMTHZgMIYJMf4eFbyHMX25-s",
    authDomain: "fuensantamendez-0211.firebaseapp.com",
    projectId: "fuensantamendez-0211",
    storageBucket: "fuensantamendez-0211.appspot.com",
    messagingSenderId: "517054457367",
    appId: "1:517054457367:web:43eff645e6d919f5609e52",
    measurementId: "G-QGTNREJD7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;