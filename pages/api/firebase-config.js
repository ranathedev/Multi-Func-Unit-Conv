import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const collectionRef = collection(db, "Unit_Conv_Types");
