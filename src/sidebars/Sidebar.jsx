import React from "react";
import "./sidebar.css";

import {
  MdAddCircle,
  MdOutlineArrowBackIosNew,
  MdArrowForwardIos,
  MdSettings,
} from "react-icons/md";

import UserAvatar from "../assets/user-avatar2.PNG";
import { useState } from "react";
import { sidebarItems, settingsItems, softwareItems } from "../data.js";

const Sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <div className={`${sidebarToggle ? "sidebar" : "sidebar sidebar-closed"}`}>
      <div className="sidebar-header">
        {sidebarToggle ? (
          <>
            <img src={UserAvatar} className="user-avatar" />
            <div className="user-data">
              <p className="small-text">Good Day 👋</p>
              <h4>Dardan D.</h4>
            </div>
          </>
        ) : (
          <img src={UserAvatar} className="user-avatar" />
        )}

        <div
          className="sidebar-toggle"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        >
          {sidebarToggle ? (
            <MdOutlineArrowBackIosNew className="toggle-icon" />
          ) : (
            <MdArrowForwardIos className="toggle-icon" />
          )}
        </div>
      </div>
      <hr />

      <div
        className={`sidebar-items ${
          sidebarToggle ? " " : " sidebar-items-closed"
        }`}
      >
        <p className="small-text sidebar-text">Menu: </p>
        <ul>
          {sidebarItems.map((item) => {
            return (
              <li>
                <item.icon className="item-icon" />
                {sidebarToggle ? item.name : ""}{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="sidebar-items-2">
        <p className="small-text sidebar-text">Software: </p>
        <div className={`widget ${sidebarToggle ? "" : "widget-closed"}`}>
          <ul>
            {softwareItems.map((item) => {
              return (
                <li>
                  <img src={item.image} className="widget-icon" />{" "}
                  {sidebarToggle ? item.name : ""}
                </li>
              );
            })}

            <li>
              <MdAddCircle className="widget-icon" />
              {sidebarToggle ? "Add New Plugin" : ""}
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div
        className={`sidebar-items-3 ${
          sidebarToggle ? " " : " sidebar-items3-closed"
        }`}
      >
        <p className="small-text sidebar-text">Settings: </p>
        <ul>
          <li>
            <MdSettings className="setting-icon" />{" "}
          </li>
          {sidebarToggle ? (
            <>
              {settingsItems.slice(1).map((item) => {
                return (
                  <li>
                    <item.icon className="setting-icon" />
                  </li>
                );
              })}
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;