import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIX305PXaMDWT9OFRQ_Fve9Oa7ijjkgoA",
    authDomain: "clone-bb7d2.firebaseapp.com",
    projectId: "clone-bb7d2",
    storageBucket: "clone-bb7d2.appspot.com",
    messagingSenderId: "462240046388",
    appId: "1:462240046388:web:5b89d474d51dea19471961"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };