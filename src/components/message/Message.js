import React from 'react';

import styles from './Message.css'

const Message = ({message}) => {
  let renderedMessage;
  if (message.type === 'practice') {
      renderedMessage = <div className={styles.practiceContainer}>
          <p className={styles.practiceMessage}>{ message.text }</p>
      </div>;
  } else if (message.type === 'patient') {
    renderedMessage = <div className={styles.patientContainer}>
        <p className={styles.patientMessage}>{ message.text }</p>
    </div>;
  }

  return (
    renderedMessage
  )
}

export default Message;
