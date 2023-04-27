import { db } from "../firebaseConfig";

import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";

async function getAllDocs(collectionName) {
    const allDocs = [];
    try {

        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
            const newDoc = doc.data();
            newDoc.id = doc.id;
            allDocs.push(newDoc)
        });
        return allDocs;
    } catch (e) {
        console.error("Error retrieving documents: ", e);
        return null
    }
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

async function deleteOneDoc(collectionName, docId) {
    try {
        await deleteDoc(doc(db, collectionName, docId));
        return 'success';
    } catch (e) {
        console.log("Error deleting document: ", e);
        return null;
    }
}

async function updateOneDoc(collectionName, docId, updateObj) {
    const docRef = doc(db, collectionName, docId);

    try {
        await updateDoc(docRef, updateObj);
        return 'success';
    } catch (e) {
        console.log("Error updating document: ", e);
        return null;
    }
}

export {
    getAllDocs,
    addNewDoc,
    deleteOneDoc,
    updateOneDoc,
}