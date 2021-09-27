import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyCYnWSaA4lOVymTwtz7IJne4QBT10Z7kZ8",
    authDomain: "fireblogs-95d91.firebaseapp.com",
    projectId: "fireblogs-95d91",
    storageBucket: "fireblogs-95d91.appspot.com",
    messagingSenderId: "239248913392",
    appId: "1:239248913392:web:12acfd2ccfb5a2759fe335"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export{ timestamp }
  export default firebaseApp.firestore()