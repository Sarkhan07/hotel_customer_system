import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

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

export { app, firestore };