import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import data from "./firebase-data.json" assert { type: 'json' };


const firebaseConfig = {
  apiKey: "AIzaSyAjYYk5GsHcMQvc4Pg2p9Xf0Yr5shrOQ7Y",
  authDomain: "hotel-customer-system-8f282.firebaseapp.com",
  projectId: "hotel-customer-system-8f282",
  storageBucket: "hotel-customer-system-8f282.appspot.com",
  messagingSenderId: "246565311057",
  appId: "1:246565311057:web:238b3bfd743a3449841e70"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const loadFirestoreData = async () => {
  try {
    const accountsCollection = collection(db, 'accounts');
  
        
     await Promise.all(
        Object.entries(data.Accounts).map(async ([user, userData]) => {
        const { password, image } = userData;
        await addDoc(accountsCollection, { user, password, image });
        await createUserWithEmailAndPassword(auth, `${user}@example.com`, `123${password}`);
      })
    );
        
    console.log('Data loaded into Firestore successfully');
  } catch (error) {
    console.error('Error loading data into Firestore:', error);
  }

  try {
    const roomsCollection = collection(db, 'rooms');
      data.Rooms.map(async (roomData) => {
      await addDoc(roomsCollection, roomData);
    })
  } catch (error) {
    console.error('Error loading data into Firestore:', error);
  }

};

loadFirestoreData();
export { app, db };