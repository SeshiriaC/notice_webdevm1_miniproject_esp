import { Menubar } from "primereact/menubar";
import { React, useState } from "react";
import noticeIcon from "../images/notice-icon-v2-noir.png";
import { Link } from "react-router-dom";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

function Menu() {
  const [visible, setVisible] = useState(false);
  const [name, setNameValue] = useState("");
  const [email, setEmailValue] = useState("");

  const MenuStart = (
    <div className="flex align-items-center">
      <Avatar label="C" shape="circle" onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        modal
        onHide={() => setVisible(false)}
        content={({ hide }) => (
          <div className=" border-round bg-white p-8 w-5 jutify-content-center align-self-center align-items-center">
            <img
                className="w-8 mb-4 align-self-center border-round"
                src={noticeIcon}
                alt="Notice Logo"
              />
            <div>
              <div className="block">
                <form>
                  <span className="p-float-label my-5">
                    <InputText
                      id="name"
                      value={name}
                      className="w-12"
                      onChange={(e) => setNameValue(e.target.value)}
                    />
                    <label htmlFor="name">Nom et Prénoms</label>
                  </span>
                  <span className="p-float-label my-5">
                    <InputText
                      id="email"
                      value={email}
                      className="w-12"
                      onChange={(e) => setEmailValue(e.target.value)}
                    />
                    <label htmlFor="email">Adresse mail</label>
                  </span>
                </form>
              </div>
              <div className="flex justify-content-between">
                <Button
                  label="Annuler"
                  icon="pi pi-times"
                  id="cardInfoButton"
                  onClick={(e) => hide(e)}
                />
                <Button
                  label="Sign in"
                  icon="pi pi-check"
                  id="cardInfoButton"
                  onClick={(e) => hide(e)}
                />
              </div>
            </div>
          </div>
        )}
      ></Dialog>
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
