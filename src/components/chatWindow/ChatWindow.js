import React from 'react';
import Message from '../message/Message';
import styles from './ChatWindow.css';

const ChatWindow = ({messages}) =>
    <div className={styles.chatWindow}>
      {messages.map((message, index) => {
        return (
          <Message
            message={ message }
            key={ index } />
        )
      })}
    </div>

export default ChatWindow;
