import React from "react";
import { AiOutlineSend } from "react-icons/ai";

import "./style.scss";

const NewMessage = ({
  handleNewMessageSend,
  newMessageText,
  onMessageChange,
  userId,
}) => {
  const isDisabled =
    !newMessageText || !String(newMessageText.replace(/\s/g, ""));
  return (
    <div id="search-message" className="send-messages">
      <div className="send-message__type">
        <input
          type="text"
          placeholder="Type your message"
          value={newMessageText}
          onChange={onMessageChange}
        ></input>
        <button
          onClick={() => handleNewMessageSend(userId)}
          disabled={isDisabled}
        >
          <AiOutlineSend className="send-messages_btn" />
          {/* залежно від isDisabled робити іконку сірою або синьою */}
        </button>
      </div>
    </div>
  );
};

export default NewMessage;
