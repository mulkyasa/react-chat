import React from "react";
import ReactMarkdown from "react-markdown";

export default function ChatItem(props) {
  return (
    <div className="w-75 media mb-3">
      <img
        src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
        alt="user"
        width="50"
        className="rounded-circle"
      ></img>
      <div className="media-body ml-3">
        <div className="bg-light rounded py-2 px-3 mb-2">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <p className="text-small mb-0 text-muted">{props.chats.name}</p>
            <button
              type="submit"
              value="Submit"
              onClick={props.chats.sent ? props.deleteChat : props.resendChat}
              className="btn btn-link py-0 px-0"
            >
            {console.log(props.chats.sent, 'sent must be false')}
              {props.chats.sent ? (
                <i className="text-dark fa fa-trash-o"></i>
              ) : (
                'reload'
              )}
            </button>
          </div>
          {/* <p className="mb-0 text-small">{props.chats.message}</p> */}
          <ReactMarkdown
            source={props.chats.message}
            className="mb-0 text-small"
          />
        </div>
      </div>
    </div>
  );
}
