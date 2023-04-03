import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

//firebaseConfig is required to make connection with database
const firebaseConfig = {
  apiKey: "AIzaSyC40pouv3O-tCK20dzXD0KooYn0rKYk1zs",
  authDomain: "mail-box-client-app.firebaseapp.com",
  projectId: "mail-box-client-app",
  storageBucket: "mail-box-client-app.appspot.com",
  messagingSenderId: "972770462982",
  appId: "1:972770462982:web:693254ffcfb9c49ac36287",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
