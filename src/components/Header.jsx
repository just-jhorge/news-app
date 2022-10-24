import React, { useState } from "react";
import Navbar from "./Navigation/Navbar";
import SideDrawer from "./Navigation/SideDrawer";

const Header = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const SideDrawerOpenHandler = () => {
    setShowSideDrawer(true);
  };
  const SideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <header className="relative">
      <Navbar openSideDrawer={SideDrawerOpenHandler} />
      <SideDrawer open={showSideDrawer} closed={SideDrawerCloseHandler} />
    </header>
  );
};

export default Header;
