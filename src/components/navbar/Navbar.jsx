import React from "react";
import "./navbar.scss";
import { BsSearch } from "react-icons/bs";
import {
  MdOutlineLanguage,
  MdOutlineDarkMode,
  MdOutlineNotificationsNone,
  MdChatBubbleOutline,
  MdList,
  MdFullscreenExit,
} from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <BsSearch />
        </div>
        <div className="items">
          <div className="item">
            <MdOutlineLanguage className="icon" />
            English
          </div>
          <div className="item">
            <MdOutlineDarkMode className="icon" />
          </div>
          <div className="item">
            <MdOutlineNotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdChatBubbleOutline className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <MdList className="icon" />
          </div>
          <div className="item">
            <MdFullscreenExit className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
