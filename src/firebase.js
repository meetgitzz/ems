// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyDdQ9MbZiCyMUdRgnc2NyBfgqbLigPMaPA",
  // authDomain: "emscollage.firebaseapp.com",
  // projectId: "emscollage",
  // storageBucket: "emscollage.appspot.com",
  // messagingSenderId: "802246362690",
  // appId: "1:802246362690:web:faaddbf50c11a33e943eaf",
  // measurementId: "G-5S079ZJBS2"

  apiKey: "AIzaSyDdQ9MbZiCyMUdRgnc2NyBfgqbLigPMaPA",
  authDomain: "emscollage.firebaseapp.com",
  databaseURL: "https://emscollage-default-rtdb.firebaseio.com",
  projectId: "emscollage",
  storageBucket: "emscollage.appspot.com",
  messagingSenderId: "802246362690",
  appId: "1:802246362690:web:fb5186acf8ec9dfc650fdb",
  measurementId: "G-MJTW2QB48C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };