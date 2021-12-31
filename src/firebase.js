import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADzWgwCaZuKBR3GFLgZyn5rnN5ujPG7S4",
  authDomain: "clone-40508.firebaseapp.com",
  projectId: "clone-40508",
  storageBucket: "clone-40508.appspot.com",
  messagingSenderId: "233736378704",
  appId: "1:233736378704:web:08977478b837999e4b3455",
  measurementId: "G-T83LRDW40D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
