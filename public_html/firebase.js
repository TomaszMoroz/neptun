import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";;
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCDs8iargzy_RFlYGfOW_5W4BI1prdza78",
    authDomain: "neptun-e6d29.firebaseapp.com",
    projectId: "neptun-e6d29",
    storageBucket: "neptun-e6d29.appspot.com",
    messagingSenderId: "761793884348",
    appId: "1:761793884348:web:67c7824fc406abdc3f20b9"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
