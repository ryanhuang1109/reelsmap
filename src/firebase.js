// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZRqGx0QxQQGrXSxq7xwg7VqW1wCpps1E",
  authDomain: "reelsmap.firebaseapp.com",
  projectId: "reelsmap",
  storageBucket: "reelsmap.appspot.com",
  messagingSenderId: "985529041658",
  appId: "1:985529041658:web:db86256718e5c29e99ff43",
  measurementId: "G-9DK4GHVY16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);