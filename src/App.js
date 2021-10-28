import React, { useState, useEffect } from "react";
import "./styles/common.scss";

import Header from "./components/Header";

import ModalMenu from "./components/ModalMenu";
import ComingSoonPopUp from "./components/ComingSoonPopUp";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };
  //scrolling listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  //connect wallet functions
  const [userAddress, setUserAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const props_through = {
    showPopup: showPopup,
    setShowPopup: setShowPopup,
    setUserAddress: setUserAddress,
    userAddress: userAddress,
  };
  return (
    <div className=" relative overflow-hidden app h-screen">
      <div id="top"></div>
      <Header
        {...props_through}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        scrolled={scrolled}
      />

      <ComingSoonPopUp showPopup={showPopup} setShowPopup={setShowPopup} />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
