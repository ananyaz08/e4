import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBoPc8GfNH9d7TpW2UeJnVhVzGYeFoCGYY",
    authDomain: "e-ride-4-8c6db.firebaseapp.com",
    projectId: "e-ride-4-8c6db",
    storageBucket: "e-ride-4-8c6db.appspot.com",
    messagingSenderId: "976402685010",
    appId: "1:976402685010:web:c90e08e84f251e3cbb538b"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


