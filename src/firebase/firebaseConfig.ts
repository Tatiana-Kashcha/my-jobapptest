import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const apiKeyFirebase = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKeyFirebase,
  authDomain: "my-vite-project-test.firebaseapp.com",
  projectId: "my-vite-project-test",
  storageBucket: "my-vite-project-test.firebasestorage.app",
  messagingSenderId: "768284615382",
  appId: "1:768284615382:web:67e9a929e738ece878df77",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);
