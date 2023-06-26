import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXe8Xrq5_hEoMYEDSB7h7DYHiKLB_EGaQ",
  authDomain: "ichat-2d635.firebaseapp.com",
  projectId: "ichat-2d635",
  storageBucket: "ichat-2d635.appspot.com",
  messagingSenderId: "909758125173",
  appId: "1:909758125173:web:5ce2906e4ac9d2a725943c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()