import React from "react";

const DateStamp = ({ date, isMessage = false }) => {
  const renderMessageDateStamp = () => {
    const messageDate = new Date(date);
    const messageHours = messageDate.getHours();
    const messageMinutes = messageDate.getMinutes();
    return (
      <div>
        {`${new Date(
          messageDate
        ).toLocaleDateString()} ${messageHours}: ${messageMinutes} `}
      </div>
    );
  };

  return !isMessage ? (
    <div className="messages__data">{new Date(date).toLocaleDateString("us")}</div>
  ) : (
    renderMessageDateStamp()
  );
};

export default DateStamp;
