import db from "../firebaseConfig";

import { collection, getDocs, addDoc } from "firebase/firestore";

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

async function addNewDoc(collectionName, newDoc) {
    let docId = '';
    try {
        const docRef = await addDoc(collection(db, collectionName), newDoc);
        console.log("Document written with ID: ", docRef.id);
        docId = docRef.id;
        return docId;
    } catch (e) {
        console.error("Error adding document: ", e);
        return null
    }
}

export {
    getAllDocs,
    addNewDoc,
}