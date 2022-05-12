import React from "react";
import "./sidebar.scss";
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { GiPapers } from "react-icons/gi";
import { ImStatsDots, ImProfile } from "react-icons/im";
import { GrSystem, GrNotes } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">supanadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <MdDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <AiOutlineUser className="icon" />
            <span>Users</span>
          </li>
          <li>
            <MdProductionQuantityLimits className="icon" />
            <span>Products</span>
          </li>
          <li>
            <GiPapers className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <ImStatsDots className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <AiOutlineBell className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <GrSystem className="icon" />
            <span>System health</span>
          </li>
          <li>
            <GrNotes className="icon" />
            <span>Logs</span>
          </li>
          <p className="title">USER</p>
          <li>
            <FiSettings className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <ImProfile className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <CgLogOut className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
