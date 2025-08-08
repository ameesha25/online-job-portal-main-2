// // Import the functions you need from the SDKs you need
// // src/firebase.config.js
// import { initializeApp } from "firebase/app";
// // import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDv8g_86d-CEbuwekouV4Q5O2_KffeYgk8",
//   authDomain: "online-job-portal-ee6be.firebaseapp.com",
//   projectId: "online-job-portal-ee6be",
//   storageBucket: "online-job-portal-ee6be.firebasestorage.app",
//   messagingSenderId: "952085461674",
//   appId: "1:952085461674:web:fbc76bd14f768c00d36ed3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };




import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };