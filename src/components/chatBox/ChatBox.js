import React, { Component } from 'react';
import ChatWindow from '../chatWindow/ChatWindow';
import InputBar from '../inputBar/InputBar';

class ChatBox extends Component {

  constructor(props) {
    super(props)
    this.stockMessages = [
      {type: 1, text: 'Hi, Cody. This is Dr. Smith reminding you of your appointment today at 3:45pm. See you in a few!'},
      {type: 2, text: 'Running late! Traffic is crazy!'},
      {type: 2, text: 'I should be able to make it to the office by 4pm :/'},
      {type: 1, text: 'No problem. Your chair will be waiting :)'}
    ]
    this.state = {
      messages: []
    }
    this.newMessageSent.bind(this)
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
      }, i*1000)
    }
  }

  cycleDemo() {
    this.addStockMessages()
    setInterval(() => {
      this.setState({
        messages: []
      }, this.addStockMessages())
    }, 30000)
  }

  newMessageSent(event) {
    console.log(event)
    event.preventDefault();
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
