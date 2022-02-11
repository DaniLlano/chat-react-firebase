import React from 'react';
import { SignInBtn } from './SignInStyles';

import firebase from 'firebase/compat/app';
import { auth } from '../../firebase';

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <SignInBtn onClick={signInWithGoogle}>Sign in with Google</SignInBtn>
    )
  }

export default SignIn;
