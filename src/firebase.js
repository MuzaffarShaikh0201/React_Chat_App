import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNFvi5m2Kk-aHXPaOUtjbus_-zLB4VQwU",
  authDomain: "react-chat-app-829db.firebaseapp.com",
  projectId: "react-chat-app-829db",
  storageBucket: "react-chat-app-829db.appspot.com",
  messagingSenderId: "364711935700",
  appId: "1:364711935700:web:7f7ca6c4922fe0c13f0541"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();