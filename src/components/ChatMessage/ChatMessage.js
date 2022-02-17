import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { auth, firestore } from '../../firebase';
import { Form, SendBtn, InputMsg  } from './ChatMessageStyles';

function ChatMessage() {

  const [msg, setMsg] = useState('')

  const addMsg = async () => {
    const { uid, photoURL } = auth.currentUser

    await firestore.collection('messages').add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimeStamp()
    })

    setMsg('')
  }

  const sendMessage = (e) => {
    e.preventDefault();
    addMsg()    
  }
  
    return (
      <Form>
          <InputMsg value={msg} onChange={e => setMsg(e.target.value)} />
  
          <SendBtn type='submit' onClick={sendMessage}>Send</SendBtn>
        </Form>
    )
  }

export default ChatMessage;