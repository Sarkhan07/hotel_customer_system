import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import data from './firebase-data.json' assert { type: 'json' };


const firebaseConfig = {
  apiKey: "AIzaSyAjYYk5GsHcMQvc4Pg2p9Xf0Yr5shrOQ7Y",
  authDomain: "hotel-customer-system-8f282.firebaseapp.com",
  projectId: "hotel-customer-system-8f282",
  storageBucket: "hotel-customer-system-8f282.appspot.com",
  messagingSenderId: "246565311057",
  appId: "1:246565311057:web:238b3bfd743a3449841e70"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const loadFirestoreData = async () => {
  try {
    const accountsCollection = collection(firestore, 'accounts');
    for (const [user, userData] of Object.entries(data.Accounts)) {
      await addDoc(accountsCollection, { user, ...userData });
    }

    const roomsCollection = collection(firestore, 'rooms');
    for (const roomData of data.Rooms) {
      await addDoc(roomsCollection, roomData);
    }

    console.log('Data loaded into Firestore successfully');
  } catch (error) {
    console.error('Error loading data into Firestore:', error);
  }
};

loadFirestoreData();

export { app, firestore };
