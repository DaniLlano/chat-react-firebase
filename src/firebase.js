import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCKaGjgkYEKxHl_NcP2h5y6WVoHSbLqkVc",
    authDomain: "chat-efc6b.firebaseapp.com",
    projectId: "chat-efc6b",
    storageBucket: "chat-efc6b.appspot.com",
    messagingSenderId: "657952329584",
    appId: "1:657952329584:web:78b01e473753e22c9c49b5"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore }