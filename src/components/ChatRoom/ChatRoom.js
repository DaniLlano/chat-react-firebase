import React, { useEffect, useState, useRef } from 'react';
import { auth, firestore } from '../../firebase';

import ChatMessage from '../ChatMessage/ChatMessage';
import { Main, Msg, Img, Text} from "./ChatRoomStyles";

function ChatRoom() {

    const [messages, setMessages] = useState([]);

    const scroll = useRef();

    useEffect(() => {
      firestore.collection('messages').orderBy('createdAt').limitToLast(25).onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))
      })
    }, []);
  
    return (
      <>
        <Main>
          {messages.map(({id, text, photoURL, uid}) => (
            <Msg ref={scroll} userClass={uid === auth.currentUser.uid && 'sent'} key={id}>
              <Img src={photoURL}></Img>
              <Text>{text}</Text>
            </Msg>
          ))}
        </Main>
        <ChatMessage scroll={scroll}/>
      </>
    )
  }

export default ChatRoom;
