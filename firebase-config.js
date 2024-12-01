
import firebase from "firebase/app";
import "firebase/firestore";

// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCv92XedKano9QLIxaQbbcqRL7ltWzNCM8",
  authDomain: "yousraaymenwedding.firebaseapp.com",
  projectId: "yousraaymenwedding",
  storageBucket: "yousraaymenwedding.firebasestorage.app",
  messagingSenderId: "695844665886",
  appId: "1:695844665886:web:f7c0ab0d8c53a8a9954c0f",
};

// تهيئة Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // استخدم التطبيق المُهيأ مسبقًا
}

const db = firebase.firestore();
export default db;
