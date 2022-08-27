import React from "react";
import "./style.scss";
import Ava from "../../Img/icons/4people.jpg";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ onSearchChange, searchedContact }) => {
  return (
    <div id="search" className="search">
      <img src={Ava} alt="avatar" className="avatar" />

      <div className="search__chat">
        <input
          type="text"
          placeholder="Search or start new chat"
          onChange={onSearchChange}
          value={searchedContact}
        ></input>
        <AiOutlineSearch className="search__icon" />
      </div>
    </div>
  );
};

export default Search;
