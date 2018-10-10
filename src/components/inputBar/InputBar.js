import React from 'react';

const InputBar = ({newMessageSent, inputUpdated, value}) => {
  return (
    <div>
      <form onSubmit={newMessageSent}>
        <input placeholder='Enter your message' name='check' onChange={inputUpdated} value={value}></input>
        <input type='submit' value='Send' />
      </form>
    </div>
  )
}

export default InputBar;
