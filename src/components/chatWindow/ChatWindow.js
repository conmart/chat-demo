import React from 'react';
import Message from '../message/Message';
import styles from './ChatWindow.css';
import { CSSTransitionGroup } from 'react-transition-group'
import './animate.css'

const ChatWindow = ({messages}) => {
  let convo = messages.map((message, index) => {
    return (
      <Message
        message={ message }
        key={ index } />
    )
  })

  return (
    <div className={styles.chatWindow}>
      <CSSTransitionGroup
        transitionName="message"
        timeout={{ enter: 500, exit: 700 }}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {convo}
      </CSSTransitionGroup>
    </div>
  )
}

export default ChatWindow;
