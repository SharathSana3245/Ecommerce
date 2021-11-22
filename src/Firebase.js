// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDn17-gSwJF7RLK4hVAFVZWIxdPXaUEzcg",
    authDomain: "clone-challenge-b4d13.firebaseapp.com",
    projectId: "clone-challenge-b4d13",
    storageBucket: "clone-challenge-b4d13.appspot.com",
    messagingSenderId: "196277928593",
    appId: "1:196277928593:web:b3486f494cdb25befab530",
    measurementId: "G-V2XP6LBBE4"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();//storing the data called database (information)
  const auth=firebase.auth();//authentication of login page.
  export {db , auth } ;