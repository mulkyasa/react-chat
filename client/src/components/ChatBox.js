import React, { Component } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };

    this.addChat = this.addChat.bind(this);
    this.deleteChat = this.deleteChat.bind(this);
  }

  componentDidMount() {
    request.get('chats')
    .then((response) => {
      console.log(response);
      this.setState({data: response.data})
    })
    .catch((err) => {
      alert(err)
    })
  }

  addChat(chatData) {
    this.setState((state) => ({
      data: [...state.data, chatData]
    }));
    request.post(`chats`, chatData)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      alert(err)
    })
  }

  deleteChat(id) {
    this.setState((state) => ({
      data: state.data.filter(item => item.id != id)
    }));
    request.delete(`chats/${id}`)
    .then((response) => {
      console.log('Completed!');
    })
    .catch((err) => {
      alert(err)
    })
  }

  render() {
    return (
      <div className="container py-4 px-4">
        <h1 className="display-4 text-center text-white mb-0">React Chat</h1>
        <p className="lead pb-4 text-center small text-white">
          Made by{" "}
          <a href="https://www.github.com/mulkyasa/" className="text-white">
            Yasa Mulky Al Afgani
          </a>
        </p>
        <div className="rounded-lg overflow-hidden shadow">
          <ChatList data={this.state.data} deleteChat={this.deleteChat} />
          <ChatForm addChat={this.addChat} />
        </div>
      </div>
    );
  }
}
