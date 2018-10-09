import React from 'react';
import Message from '../message/Message';

const ChatWindow = ({messages}) =>
    <div>
      {messages.map((message, index) => {
        return (
          <Message
            message={ message }
            key={ index } />
        )
      })}
    </div>

export default ChatWindow;
