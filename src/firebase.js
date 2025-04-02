// 📌 Firestore 가져오기
import firebase from "firebase/app";
import "firebase/firestore"; // Firestore 기능 추가

// 📌 Firebase 설정 정보
const firebaseConfig = {
  apiKey: "AIzaSyCwwhXJVL93yp9CxalffXFWCouVm4SMPHc",
  authDomain: "mine-79323.firebaseapp.com",
  projectId: "mine-79323",
  storageBucket: "mine-79323.firebasestorage.app",
  messagingSenderId: "747478041697",
  appId: "1:747478041697:web:29b5f91660a73e26025620",
  measurementId: "G-G3B83677BW",
};

// 📌 Firebase 초기화 (중복 방지)
const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
const db = app.firestore(); // Firestore 인스턴스
const FieldValue = firebase.firestore.FieldValue; // Firestore의 FieldValue 가져오기




// ✅ `db`는 `export default`, `FieldValue`는 `{}`로 export
export { FieldValue };
export default db;
