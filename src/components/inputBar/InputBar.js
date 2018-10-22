import React from 'react';
import styles from './InputBar.css';

const InputBar = ({newMessageSent, inputUpdated, value}) => {
  return (
    <div className={styles.container}>
      <form onSubmit={newMessageSent}>
        <input className={styles.input} placeholder='Start typing...' name='check' onChange={inputUpdated} value={value}></input>
        <input className={styles.submit} type='submit' value='Send' />
      </form>
    </div>
  )
}

export default InputBar;
