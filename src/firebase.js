// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFCyXPyc5xuypQfmjWxlwxU2YgTd6he0o",
  authDomain: "authentication-template-84e5c.firebaseapp.com",
  projectId: "authentication-template-84e5c",
  storageBucket: "authentication-template-84e5c.appspot.com",
  messagingSenderId: "1021668853453",
  appId: "1:1021668853453:web:42d37a395f62fab6e44b84",
  measurementId: "G-J09VCYELEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;