import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCC_yRxW3EC75tZSNgXqaBjLbY7XT3d_ok",
    authDomain: "clone-683f1.firebaseapp.com",
    projectId: "clone-683f1",
    storageBucket: "clone-683f1.appspot.com",
    messagingSenderId: "177397530638",
    appId: "1:177397530638:web:e061753e98ae3b220efc5f",
    measurementId: "G-LL684ZEQBC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};