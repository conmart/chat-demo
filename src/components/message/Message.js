import React from 'react';
import classNames from 'classnames/bind';

import styles from './Message.css';

const cx = classNames.bind(styles);

const Message = ({message}) => {

  const isPractice = message.type === 'practice'
  const containerStyles = cx('container',
    {practiceContainer: isPractice,
      patientContainer: !isPractice})

  const contentStyles = cx('message',
     {practiceMessage: isPractice,
       patientMessage: !isPractice})

  return (
    <div className={containerStyles}>
      <p className={contentStyles}>
        { message.text }
      </p>
    </div>
  )
}

export default Message;
