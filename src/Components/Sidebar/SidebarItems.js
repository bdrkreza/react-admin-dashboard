import React from "react";
import "./Sidebar.css";
export default function SidebarItems(props) {
  const active = props.active ? "active" : "";
  return (
    <div className="sidebar_item">
      <div className={`sidebar_item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
}
