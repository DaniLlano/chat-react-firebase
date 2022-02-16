import React from 'react';
import { auth } from '../../firebase';
import { Msg } from './ChatMessageStyles';

function ChatMessage(props) {
    const { text, uid, photoUrl } = props.message;

  
    return (
      <Msg className={`message ${messageClass}`}>
        <img src={photoUrl} />
        <p>{text}</p>
      </Msg>
    )
  }

export default ChatMessage;