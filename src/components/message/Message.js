import React from 'react';

import styles from './styles.css'

const Message = ({message}) => {
  return (
    <div className={styles.message}>
      <p>{ message.text }</p>
    </div>
  )
}

export default Message;
