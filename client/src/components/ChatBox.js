import React, { Component } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };

    this.addChat = this.addChat.bind(this);
    this.deleteChat = this.deleteChat.bind(this);
  }

  addChat(chats) {
    this.setState(state => ({
      data: [...state.data, chats]
    }));
  }

  deleteChat() {}

  render() {
    return (
      <div className="container py-4 px-4">
        <h1 className="display-4 text-center text-white mb-0">React Chat</h1>
        <p class="lead pb-4 text-center small text-white">
          Made by{" "}
          <a href="https://www.github.com/mulkyasa/" className="text-white">
            Yasa Mulky Al Afgani
          </a>
        </p>
        <div className="rounded-lg overflow-hidden shadow">
          <ChatList data={this.state.data} />
          <ChatForm addChat={this.addChat} />
        </div>
      </div>
    );
  }
}
