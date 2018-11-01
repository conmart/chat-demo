import React from 'react';

import styles from './Message.css'

const Message = ({message}) => {

  return (
    <div className={styles.messageContainer}>
      <div className={
        message.type ==='practice' ?
        styles.practiceContainer :
        styles.patientContainer
      }>
        <p className={
          message.type ==='practice' ?
          styles.practiceMessage :
          styles.patientMessage
        }>
          { message.text }
        </p>
      </div>
    </div>
  )
}

export default Message;
