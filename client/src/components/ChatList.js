import React from "react";
import ChatItem from "./ChatItem";

export default function ChatList (props) {
  const listItems = props.data.map((item, index) =>
    <ChatItem key={index} chats={item} />
  );

  return (
    <div class="col-12 px-0">
      <div class="px-4 py-5 chat-box bg-white">
        {listItems}
      </div>
    </div>
  );
}
