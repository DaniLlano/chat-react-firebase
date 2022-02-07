import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'

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

function App() {
   
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>

      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithGoogle(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut}>Sign Out</button>
  )
}

export default App;
