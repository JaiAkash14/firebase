// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHBtUn48WJri_eNzTchjvWjc4xXTCFsRY",
  authDomain: "project-b5725.firebaseapp.com",
  projectId: "project-b5725",
  storageBucket: "project-b5725.appspot.com",
  messagingSenderId: "656586019220",
  appId: "1:656586019220:web:b43229886ba6d909db3f81",
  measurementId: "G-NTCXZ135GP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db 