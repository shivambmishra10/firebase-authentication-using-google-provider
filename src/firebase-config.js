import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    // add your firebase config
    apiKey: "AIzaSyBw2aHIvnBpoHoXn_LBuSoEQ0SrlTk0fb8",
  authDomain: "authentication-af611.firebaseapp.com",
  projectId: "authentication-af611",
  storageBucket: "authentication-af611.appspot.com",
  messagingSenderId: "997915221644",
  appId: "1:997915221644:web:daabba29c5f79ca17325a9",
  measurementId: "G-5WGFL89J5P"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);