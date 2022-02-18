import React from "react";
import "./SidebarOption.css";

export const SidebarOption = ({ text, Icon }) => {
  return (
    <div className="sidebar-option">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};
