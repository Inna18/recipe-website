import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZUFIxu6G39jQ-vjGTbzSGlilCyFAg9qA",
  authDomain: "cooking-site-ebd4d.firebaseapp.com",
  projectId: "cooking-site-ebd4d",
  storageBucket: "cooking-site-ebd4d.appspot.com",
  messagingSenderId: "789367204511",
  appId: "1:789367204511:web:437c41cd92419ea04810aa"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore }