import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWG_KYYxtZjxuRPLNEUdYGAM7vGFQHDw4",
  authDomain: "project-1411e.firebaseapp.com",
  projectId: "project-1411e",
  storageBucket: "project-1411e.appspot.com",
  messagingSenderId: "94711857433",
  appId: "1:94711857433:web:27d133df56223eb5498588",
  measurementId: "G-ER5WD40TS4"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;