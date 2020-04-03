import React, { Component } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Yasa Mulky Al Afgani",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        }
      ]
    };

    this.addChat = this.addChat.bind(this);
    this.deleteChat = this.deleteChat.bind(this);
  }

  addChat(chats) {
    this.setState(state => ({
      data: [...(state.data + chats)]
    }));
  }

  deleteChat() {}

  render() {
    return (
      <div className="container py-4 px-4">
        <h1 className="display-4 text-center mb-4">React Chat</h1>
        <div className="rounded-lg overflow-hidden shadow-sm">
          <ChatList data={this.state.data} />
          <div>
            <ChatForm addChat={this.addChat} />
          </div>
        </div>
        <p class="lead py-4 text-center small text-muted">
          Made by{" "}
          <a href="https://www.github.com/mulkyasa/" className="text-muted">
            Yasa Mulky Al Afgani
          </a>
        </p>
      </div>
    );
  }
}
