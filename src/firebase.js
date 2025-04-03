import firebase from "firebase/app";
import "firebase/auth"; 
import "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCwwhXJVL93yp9CxalffXFWCouVm4SMPHc",
  authDomain: "mine-79323.firebaseapp.com",
  projectId: "mine-79323",
  storageBucket: "mine-79323.appspot.com",
  messagingSenderId: "747478041697",
  appId: "1:747478041697:web:29b5f91660a73e26025620",
  measurementId: "G-G3B83677BW",
};

// ✅ Firebase 초기화 (중복 방지)
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const auth = app.auth();
const db = app.firestore();
const FieldValue = firebase.firestore.FieldValue; // 🔹 FieldValue 추가

export { auth, db, FieldValue }; // 🔥 FieldValue도 export
export default app;
