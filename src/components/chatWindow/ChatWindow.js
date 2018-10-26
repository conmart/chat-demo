import React from 'react';
import Message from '../message/Message';
import styles from './ChatWindow.css';
import { CSSTransition } from 'react-transition-group';

const ChatWindow = ({messages}) => {
  let convo = messages.map((message, index) =>
    <Message
      message={ message }
      key={ index } />)

  let createMessage = messages.length

  return (
    <div className={styles.chatWindow}>
      <CSSTransition
        in={createMessage == true}
        timeout={3000}
        classNames='message'
        unmountOnExit
      >
        <Message
          message={messages[0]}
        />
      </CSSTransition>
    </div>
  )
}

export default ChatWindow;
