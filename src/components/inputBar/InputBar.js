import React from 'react';
import styles from './InputBar.css';

const InputBar = ({newMessageSent, inputUpdated, value}) => {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={newMessageSent}>
        <input className={styles.input} placeholder='Start typing...' name='check' onChange={inputUpdated} value={value}></input>
        <button className={styles.submitBtn} type='submit'>
          <img className={styles.sendIcon} src="../../../static/images/paper-plane-white.png" />
        </button>
      </form>
    </div>
  )
}

export default InputBar;
