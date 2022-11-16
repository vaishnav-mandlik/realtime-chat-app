// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA618u5zYAgY7ZAsUszMAslmcbpqWsxBQA",
  authDomain: "chat-app-d3a90.firebaseapp.com",
  projectId: "chat-app-d3a90",
  storageBucket: "chat-app-d3a90.appspot.com",
  messagingSenderId: "592812295749",
  appId: "1:592812295749:web:4b75a9b266225124aa452c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
