import { app, firestore } from './firebase'; 
import data from './firebase-data.json'; // Путь к вашему файлу firebase-data.json

const uploadData = async () => {
  const db = firestore;

  const hotelsCollection = db.collection('hotels');

  data.hotels.forEach(async (hotel) => {
    await hotelsCollection.add(hotel);
  });

  console.log('Data uploaded successfully!');
};

uploadData();
