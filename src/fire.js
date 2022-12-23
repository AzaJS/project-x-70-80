import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCId_uA87ZWh5J0mims8TMJaGpO8UL77tw",
  authDomain: "project-x-bb494.firebaseapp.com",
  projectId: "project-x-bb494",
  storageBucket: "project-x-bb494.appspot.com",
  messagingSenderId: "637392238692",
  appId: "1:637392238692:web:d62123a836981997e30771"

};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
