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
    <div id="send-message" className="send-messages">
      <div className="send-messages__type">
        <input
          type="text"
          placeholder="Type your message"
          value={newMessageText}
          onChange={onMessageChange}
          onKeyPress={(k) => k.key === "Enter" && handleNewMessageSend(userId)}
        />
        <button
          className="send-messages__type__btn"
          onClick={() => handleNewMessageSend(userId)}
          disabled={isDisabled}
        >
          <AiOutlineSend className={!isDisabled ? "icon_off" : "icon_on"} />
        </button>
      </div>
    </div>
  );
};

export default NewMessage;
