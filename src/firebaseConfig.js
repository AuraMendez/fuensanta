import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);


export { db, auth, storage };