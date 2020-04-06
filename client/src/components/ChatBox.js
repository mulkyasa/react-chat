import React, { Component } from "react";
import axios from "axios";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import io from "socket.io-client";

const socket = io("http://localhost:3000");
const API_URL = "http://localhost:3000/api/chats";

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.loadChat();

    socket.emit("delete chat", "dikirim");

    socket.on("load chat", (newData) => {
      this.loadChat();
    });

    socket.on("delete chat", (id) => {
      this.setState((state) => ({
        data: state.data.filter((chatData) => chatData.id !== id),
      }));
    });
  }

  loadChat = () => {
    return axios
      .get(API_URL)
      .then((response) => {
        console.log(response)
          let chatData = response.data.map((chats) => {
            return { ...chats, sent: true };
          });
          this.setState({ data: chatData });
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addChat = (chatData) => {
    console.log(chatData);
    this.setState((state) => ({
      data: [...state.data, chatData],
    }));

    axios
      .post(API_URL, chatData)

      .then((response) => {
        
        socket.emit("add chat");
      })

      .catch((err) => {
        this.setState((state) => {
          data: state.data.map((data) => {
            if (data.id === chatData.id) chatData.sent = false;
            return chatData;
          });
        });
      });
  };

  deleteChat = (id) => {
    this.setState((state) => ({
      data: state.data.filter((item) => item.id !== id),
    }));
    return axios
      .delete(API_URL + `/${id}`)
      .then((response) => {
        console.log("Completed!");
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    return (
      <div className="container py-4 px-4">
        <h1 className="display-4 text-center text-white mb-0">React Chat</h1>
        <p className="lead pb-3 text-center small text-white">
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
