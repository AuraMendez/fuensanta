import db from "../firebaseConfig";

import { collection, getDocs } from "firebase/firestore";

async function getAllDocs(collectionName) {
    const allDocs = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
        const newDoc = doc.data();
        newDoc.id = doc.id;
        allDocs.push(newDoc)
    });
    return allDocs;
}

export {
    getAllDocs,
}