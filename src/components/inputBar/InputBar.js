import React from 'react';

const InputBar = ({newMessageSent}) => {
  return (
    <div>
      <form onSubmit={newMessageSent}>
        <input placeholder='Enter your message' name='check'></input>
        <input type='submit' value='Send' />
      </form>
    </div>
  )
}

export default InputBar;
