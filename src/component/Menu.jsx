import { Menubar } from "primereact/menubar";
import React from "react";
import noticeIcon from "../images/notice-icon-v2-noir.png";
import { Link } from "react-router-dom";
import { Avatar } from "primereact/avatar";

function Menu() {
  const MenuStart = (
    <div className="flex align-items-center gap-8">
      <Avatar
        label="C"
        shape="circle"
      />
    </div>
  );

  const MenuEnd = (
    <Link to="/acceuil">
      <img alt="logo" src={noticeIcon} height="30" className="mr-1"></img>
    </Link>
  );

  const items = [
    {
      label: "Acceuil",
      icon: "pi pi-home",
      url: "/acceuil",
    },
    {
      label: "Evènements",
      icon: "pi pi-hashtag",
      url: "/evenements",
    },
    {
      label: "Booking",
      icon: "pi pi-ticket",
      url: "/booking",
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      url: "/contact",
    },
  ];

  return (
    <div id="menuBar">
      <Menubar
        model={items}
        start={MenuStart}
        end={MenuEnd}
        className="border-noround"
      />
    </div>
  );
}

export default Menu;
