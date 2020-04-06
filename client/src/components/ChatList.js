import React from "react";
import ChatItem from "./ChatItem";

export default function ChatList(props) {
  console.log(props.data, 'data list')
  const listItems = props.data.map((item, index) => (
    <ChatItem
      key={index}
      chats={item}
      deleteChat={() => props.deleteChat(item.id)}
    />
  ));

  return (
    <div className="col-12 px-0">
      <div className="px-4 pt-4 chat-box bg-white">{listItems}</div>
    </div>
  );
}
