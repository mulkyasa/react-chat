import React, { Component } from "react";
import ChatList from "./ChatList";

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{name: 'Yasa', message: 'Hello' }] };

    this.addChat = this.addChat.bind(this);
    this.deleteChat = this.deleteChat.bind(this);
  }

  addChat() {}

  deleteChat() {}

  render() {
    return (
      <div>
        <h1>Chat</h1>
        <ChatList data={this.state.data} />
      </div>
    );
  }
}
