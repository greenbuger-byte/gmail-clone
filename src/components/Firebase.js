import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBN0ASDYUaZ78EvaqJt6wKgJNsoh17pjOk",
    authDomain: "fir-dfe38.firebaseapp.com",
    projectId: "fir-dfe38",
    storageBucket: "fir-dfe38.appspot.com",
    messagingSenderId: "884355218355",
    appId: "1:884355218355:web:39f97ecfbad3cb1c3be9c6",
    measurementId: "G-WS1V0FJDV5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider =  new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};