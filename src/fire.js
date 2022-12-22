import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyqCoxSWjf-aY55TtrcokXf5DeFhQgQZE",
  authDomain: "project-x-21500.firebaseapp.com",
  projectId: "project-x-21500",
  storageBucket: "project-x-21500.appspot.com",
  messagingSenderId: "1006751604933",
  appId: "1:1006751604933:web:7a6d6b3614ebcba08010ac",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
