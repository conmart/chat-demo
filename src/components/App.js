import React, { Component } from 'react';
import ChatBox from './chatBox/ChatBox';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '400px'}}>
        <ChatBox />
      </div>
    );
  }
}

export default App;
