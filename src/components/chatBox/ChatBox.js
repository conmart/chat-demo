import React, { Component } from 'react';
import ChatWindow from '../chatWindow/ChatWindow';
import InputBar from '../inputBar/InputBar';

class ChatBox extends Component {

  constructor(props) {
    super(props)
    this.stockMessages = [
      {type: 'practice', text: 'Hi, Cody. This is Dr. Smith reminding you of your appointment today at 3:45pm. See you in a few!'},
      {type: 'patient', text: 'Running late! Traffic is crazy!'},
      {type: 'patient', text: 'I should be able to make it to the office by 4pm :/'},
      {type: 'practice', text: 'No problem. Your chair will be waiting :)'}
    ]
    this.loopInterval = 15000
    this.messageInterval = (this.loopInterval / 2) / (this.stockMessages.length + 1)
    this.state = {
      messages: [],
      input: ''
    }
    this.newMessageSent = this.newMessageSent.bind(this)
    this.inputUpdated = this.inputUpdated.bind(this)
  }

  componentDidMount() {
    this.addStockMessages()
    this.cycleDemo();
  }

  addStockMessages() {
    for (let i=1; i<=this.stockMessages.length; i++) {
      setTimeout(() => {
        const messages = [...this.state.messages, this.stockMessages[i-1]]
        this.setState({
          messages
        })
      }, i * this.messageInterval)
    }
  }

  cycleDemo() {
    setInterval(() => {
      this.setState({
        messages: []
      }, this.addStockMessages())
    }, this.loopInterval)
  }

  inputUpdated(event) {
    this.setState({
      input: event.target.value
    })
  }

  newMessageSent(event) {
    event.preventDefault();
    if (this.state.input) {
      const receivedMessage = { type: 'practice', text: this.state.input }
      const messages = [...this.state.messages, receivedMessage]
      this.setState({
        messages,
        input: ''
      })
    }
  }

  render() {
    return (
      <div className="ChatBox">
        <ChatWindow
          messages={ this.state.messages }
        />
        <InputBar
          value={this.state.input}
          inputUpdated={this.inputUpdated}
          newMessageSent={this.newMessageSent}
        />
      </div>
    );
  }
}

export default ChatBox;
