import React from "react";

import './style.scss'

const SearchMessages = () => {
  return (
    <div id='search-message' className="search-messages">
      <div className="search-messages__type">
        <input type="text" placeholder="Type your message"></input>
      </div>
    </div>
  );
};

export default SearchMessages;
