// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwwhXJVL93yp9CxalffXFWCouVm4SMPHc",
  authDomain: "mine-79323.firebaseapp.com",
  projectId: "mine-79323",
  storageBucket: "mine-79323.firebasestorage.app",
  messagingSenderId: "747478041697",
  appId: "1:747478041697:web:29b5f91660a73e26025620",
  measurementId: "G-G3B83677BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;