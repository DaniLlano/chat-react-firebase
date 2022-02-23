import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { auth, firestore } from '../../firebase';
import { Form, SendBtn, InputMsg } from './ChatMessageStyles';

function ChatMessage({scroll}) {

  const [msg, setMsg] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    setMsg('');

    await firestore.collection('messages').add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })

    scroll.current.scrollIntoView({ behavior: 'smooth' })
  }
  
    return (
      <Form onSubmit={sendMessage}>
          <InputMsg value={msg} onChange={(e) => setMsg(e.target.value)} />
  
          <SendBtn type='submit' disabled={!msg}>Send</SendBtn>
        </Form>
    )
  }

export default ChatMessage;