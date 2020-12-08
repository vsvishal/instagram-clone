import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGEdSlvufbVeErOkVFRBicbb4YzeEGNJs",
  authDomain: "instagram-clone-4ef01.firebaseapp.com",
  databaseURL: "https://instagram-clone-4ef01.firebaseio.com",
  projectId: "instagram-clone-4ef01",
  storageBucket: "instagram-clone-4ef01.appspot.com",
  messagingSenderId: "741000218150",
  appId: "1:741000218150:web:b667d41b48147712c8c8e7",
  measurementId: "G-3PNVZ7RKEJ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
