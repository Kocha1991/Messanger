import React from "react";
import DateStamp from "../../UI/DateStamp";
import UserAvatar from "../../UI/UserAvatar";

const MessageItem = ({ message, avatar }) => {
  const { date, isMyMessage, messageText} = message;


  return (
    <div className={`messages__${isMyMessage ? "your" : "friend"}`}>
      <div className={`messages__wrapper_${isMyMessage ? 'your' : 'friend'}`}>
      {!isMyMessage ? <UserAvatar avatar={avatar}/> : ''}
      <div className={`text text_${isMyMessage ? "your" : "friend"}`}>
        {messageText}
      </div>
      </div>
      <div
        className={`messages__data messages__data_${
          isMyMessage ? "your" : "friend"
        }`}
      >
        <DateStamp isMessage={true} date={date}/>
      </div>
    </div>
  );
};

export default MessageItem;
