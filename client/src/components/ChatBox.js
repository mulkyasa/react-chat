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

    socket.on("load chat", (newData) => {
      this.setState((state) => ({ data: [...state.data, newData] }));
    });

    socket.on("delete chat", (id) => {
      this.setState((state) => ({
        data: state.data.filter((chatData) => chatData.id !== id),
      }));
    });
  }

  loadChat = () => {
    axios.get(API_URL)
    .then((response) => {
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
    this.setState((state) => ({
      data: [...state.data, chatData]
    }));

    axios.post(API_URL, chatData)
    .then(() => {
      socket.emit("add chat");
    })
    .catch(() => {
      this.setState((state) => {
      // console.log(state.data)
        state.data.map((item) => {
          if (item.id === chatData.id) {
            console.log(item.id, "item", chatData.id, "chatData");
            item.sent = false;
            console.log("sent", item.sent)
          }
          return item;
        });
      });
    });
  };

  deleteChat = (id) => {
    this.setState((state) => ({
      data: state.data.filter((item) => item.id !== id),
    }));
    axios.delete(API_URL + `/${id}`)
    .then(() => {
      socket.emit("delete chat", id);
    })
    .catch((err) => {
      alert(err);
    });
  };

  resendChat = (chatData) => {
    axios.post(API_URL, chatData)
    .then(() => {
      this.setState((state) => ({
        data: state.data.map((item) => {
          // console.log(item.id, chatData.id)
          if (item.id === chatData.id) {
            item.sent = true;
          }
          return item;
        }),
      }));
    })
    .catch(() => {
      this.setState((state) => ({
        data: state.data.map((item) => {
          if (item.id === chatData.id) {
            item.sent = false;
          }
          return item;
        }),
      }));
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
          <ChatList
            data={this.state.data}
            deleteChat={this.deleteChat}
            resendChat={this.resendChat}
          />
          <ChatForm addChat={this.addChat} />
        </div>
      </div>
    );
  }
}
