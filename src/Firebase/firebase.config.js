// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHFt5TICuX9Oa-7Eh37JN7nuV24gpFwW4",
    authDomain: "assignment-9-49d76.firebaseapp.com",
    projectId: "assignment-9-49d76",
    storageBucket: "assignment-9-49d76.appspot.com",
    messagingSenderId: "649242026836",
    appId: "1:649242026836:web:38f60f3fa5f239260fdec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;