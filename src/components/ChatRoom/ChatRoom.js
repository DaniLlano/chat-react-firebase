import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../../firebase';

import ChatMessage from '../ChatMessage/ChatMessage';
import { Main, Msg} from "./ChatRoomStyles";

function ChatRoom() {

    const [messages, setMessages] = useState([])

    useEffect(() => {
      firestore.collection('messages').orderBy('createdAt').limit(25).onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))
      })
    }, [])
  
    return (
      <>
        <Main>
          {messages.map(({id, text, photoURL, uid}) => (
            <Msg userClass={uid === auth.currentUser.uid && 'sent'} key={id}>
              <img src={photoURL}></img>
              <p>{text}</p>
            </Msg>
          ))}
        </Main>
        <ChatMessage />
      </>
    )
  }

export default ChatRoom;
