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
    this.state = {
      messages: []
    }
    this.newMessageSent = this.newMessageSent.bind(this)
  }

  componentDidMount() {
    this.cycleDemo();
  }

  addStockMessages() {
    for (let i=1; i<=this.stockMessages.length; i++) {
      setTimeout(() => {
        const newMessages = this.state.messages
        newMessages.push(this.stockMessages[i-1])
        this.setState({
          messages: newMessages
        })
      }, i*1)
    }
  }

  cycleDemo() {
    this.addStockMessages()
    setInterval(() => {
      this.setState({
        messages: []
      }, this.addStockMessages())
    }, 3000000)
  }

  newMessageSent(event) {
    event.preventDefault();
    const receivedText = event.target[0].value;
    const receivedMessage = { type: 'practice', text: receivedText }
    const newMessages = this.state.messages
    newMessages.push(receivedMessage)
    this.setState({
      messages: newMessages
    })
  }

  render() {
    return (
      <div className="ChatBox">
        <ChatWindow
          messages={ this.state.messages }
        />
        <InputBar newMessageSent={this.newMessageSent}/>
      </div>
    );
  }
}

export default ChatBox;
