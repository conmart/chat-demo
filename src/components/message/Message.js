import React from 'react';

import styles from './Message.css'

const Message = ({message}) => {

  return (
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
  )
}

export default Message;
