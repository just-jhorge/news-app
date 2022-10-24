import React from "react";
import Backdrop from "../Backdrop";
import NavItem from "./NavItem";

const SideDrawer = ({ open, closed }) => {
  let className = [
    "fixed w-72 max-w-[80%] h-full left-0 top-0 z-[200] bg-white py-8 px-8 transition-all sm:hidden",
    "-translate-x-full",
  ];

  if (open) {
    className = [
      "fixed w-72 max-w-[80%] h-full left-0 top-0 z-[200] bg-white py-16 px-8 transition-all sm:hidden",
      "translate-x-0",
    ];
  }

  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={className.join(" ")}>
        <h1 className="uppercase text-3xl font-bold">news.</h1>
        <nav className="mt-20">
          <ul className="flex flex-col items-start justify-center gap-10">
            <NavItem link="/">Home</NavItem>
            <NavItem link="/business">Business</NavItem>
            <NavItem link="/technology">Technology</NavItem>
            <NavItem link="/sports">Sports</NavItem>
            <NavItem link="/entertainment">Entertainment</NavItem>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
