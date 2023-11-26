import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import data from "./firebase-data.json";

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

const loadFireStoreData = async () => {
  try {
    const accountsCollection = collection(db, 'accounts');
    const accountsQuery = await getDocs(accountsCollection);


    if (accountsQuery.size === 0) {
      await Promise.all(
        Object.entries(data.Accounts).map(async ([user, userData]) => {
          const { password, image } = userData;
          await addDoc(accountsCollection, {user, password, image});
          await createUserWithEmailAndPassword(auth, `${user}@example.com`, `123${password}`);
        })
      );
      console.log('Accounts data loaded into Firestore successfully');
    }  else {
      console.log('Accounts data already exists in Firestore');
    } 
    
  } catch (error) {
      console.error('Error loading accounts data into Firestore:', error);
    }

  try {
    const roomsCollection = collection(db, 'rooms');
    const roomsQUery = await getDocs(roomsCollection);

    if(roomsQUery.size === 0) {
      await Promise.all(
        data.Rooms.map(async (roomData) => {
          await addDoc(roomsCollection, roomData);
        })
      );
      console.log('Rooms data loaded into Firestore successfully');
    } else {
      console.log('Rooms data already exists in Firestore');
    }
  } catch (error) {
    console.error('Error loading data into Firestore:', error);
  }
};

loadFireStoreData();
export { app, db, auth, signOut };