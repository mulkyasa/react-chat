import React from "react";

export default function ChatItem(props) {
  return (
    <div className="w-75 media mb-3">
      <img
        src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
        alt="user"
        width="50"
        class="rounded-circle"
      ></img>
      <div className="media-body ml-3">
        <div class="bg-light rounded py-2 px-3 mb-2">
          <p className="text-small mb-0 text-muted">
            {props.chats.name}
          </p>
          <p class="mb-0 text-small">
            {props.chats.message}
          </p>
        </div>
      </div>
    </div>
  );
}
