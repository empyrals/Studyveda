import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ className: "icon" }}>
        <div className="sidebar">
          <nav className="side-menu">
            <ul className="sidebar-items">
              <div className="headd">
                <AiIcons.AiOutlineGitlab className="logo" />
                <h2>StudyVeda</h2>
              </div>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
