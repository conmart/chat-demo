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
      <div className={styles.inner}>
        <CSSTransitionGroup
          transitionName="message"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {convo}
        </CSSTransitionGroup>
      </div>
    </div>
  )
}

export default ChatWindow;
