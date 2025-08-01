// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "",
    authDomain: "vendor-payment-system.firebaseapp.com",
    projectId: "vendor-payment-system",
    storageBucket: "vendor-payment-system.firebasestorage.app",
    messagingSenderId: "445374552282",
    appId: "",
    measurementId: "G-BX0HZW29MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
const db = getFirestore(app);

export { db };
