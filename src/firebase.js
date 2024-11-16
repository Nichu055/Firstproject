// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2MMcYOexm0qduRxFqUOgsg0Bf8A6nvbc",
    authDomain: "apps-b4e8e.firebaseapp.com",
    projectId: "apps-b4e8e",
    storageBucket: "apps-b4e8e.firebasestorage.app",
    messagingSenderId: "637698455851",
    appId: "1:637698455851:web:f027a581a18c8e10366d6e"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };