import React, { useState, useRef } from 'react';
import { Main, Form, SendBtn, InputMsg } from "./ChatRoomStyles";

import ChatMessage from '../ChatMessage/ChatMessage';

import firebase from 'firebase/compat/app';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, firestore } from '../../firebase';

function ChatRoom() {

    const dummy = useRef();
  
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limitToLast(25)
    
    const [messages] = useCollectionData(query, {idField: 'id'});
  
    const [formValue, setFormValue] = useState('');
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      });
  
      setFormValue('');
  
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (
      <>
       <Main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
       
        <div ref={dummy}></div>
       </Main>
  
       <Form onSubmit={sendMessage}>
          <InputMsg value={formValue} onChange={(e) => setFormValue(e.target.value)} />
  
          <SendBtn type="submit">Send</SendBtn>
       </Form>
      </>
    )
  }

export default ChatRoom;
