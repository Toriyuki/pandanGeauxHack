// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8-GcTkTZAqOOXhWyiIT-hOi2qb2_GnyE",
  authDomain: "pandan-5c459.firebaseapp.com",
  projectId: "pandan-5c459",
  storageBucket: "pandan-5c459.appspot.com",
  messagingSenderId: "499022849648",
  appId: "1:499022849648:web:36d8ec7910ddc6d0dd36b5",
  measurementId: "G-VCE2ZBMHDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);