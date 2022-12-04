import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQtKYlwyJO10ipp3nOcDW2xvs8m41YZkA",
  authDomain: "multi-func-unit-conv.firebaseapp.com",
  databseUrl: "https://multi-func-unit-conv-default-rtdb.firebaseio.com",
  projectId: "multi-func-unit-conv",
  storageBucket: "multi-func-unit-conv.appspot.com",
  messagingSenderId: "75373470363",
  appId: "1:75373470363:web:0e972ed2aa4314fb1b5c3e",
  measurementId: "G-W0VN8K02W7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
