// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  projectId: import.meta.env.VITE_projectId,
  authDomain:import.meta.env.VITE_authDomain,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appid

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


