import React from "react";

export default function ChatItem (props) {
  return (
    <li>
      {props.chats.name} : {props.chats.message}
    </li>
  );
}
