import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAgr2GI4C88kBtfqXcqYOnai_aRwFOle-I",
    authDomain: "my-articles-f406b.firebaseapp.com",
    projectId: "my-articles-f406b",
    storageBucket: "my-articles-f406b.appspot.com",
    messagingSenderId: "320810787173",
    appId: "1:320810787173:web:9956a08ed75755702bc18c"
  };

  const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
