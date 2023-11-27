import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_2MPLiODubH0nfQByIRAmQQiW--Jj67o",
  authDomain: "dignowise.firebaseapp.com",
  projectId: "dignowise",
  storageBucket: "dignowise.appspot.com",
  messagingSenderId: "713840943959",
  appId: "1:713840943959:web:41671f457d7151da139412"
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };