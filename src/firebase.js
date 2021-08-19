import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAimS1zR6jSolypkW4P269r8lvG5jDA_Ms",
    authDomain: "linkedin-clone-6505d.firebaseapp.com",
    projectId: "linkedin-clone-6505d",
    storageBucket: "linkedin-clone-6505d.appspot.com",
    messagingSenderId: "33360348888",
    appId: "1:33360348888:web:8200eebc722a5433e279ad",
    measurementId: "G-YGCZPDZXP7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth}