import db from "../firebaseConfig";

import { collection, getDocs } from "firebase/firestore";

async function getConcerts() {
    const querySnapshot = await getDocs(collection(db, "concerts"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
    return querySnapshot;
}

export {
    getConcerts,
}