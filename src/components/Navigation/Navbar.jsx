import React from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import NavItem from "./NavItem";

const Navbar = ({ openSideDrawer }) => {
  return (
    <div className="h-16 drop-shadow-md bg-white fixed top-0 w-full flex items-center justify-between px-3 md:px-10">
      <div className="uppercase font-bold text-xl">News.</div>
      <nav>
        <ul className="hidden md:flex items-center justify-center gap-10">
          <NavItem link="/">Home</NavItem>
          <NavItem link="/business">Business</NavItem>
          <NavItem link="/technology">Technology</NavItem>
          <NavItem link="/sports">Sports</NavItem>
          <NavItem link="/entertainment">Entertainment</NavItem>
        </ul>
      </nav>
      <div className="hidden md:block border-2 border-gray-500 rounded-md outline-none">
        <input
          type="text"
          placeholder="Search"
          className="border-none bg-transparent outline-none px-2 py-1"
        />
        <button className="px-2 py-1 bg-blue-300 text-white">Submit</button>
      </div>
      <div className="block md:hidden text-3xl" onClick={openSideDrawer}>
        <HiMenuAlt3 />
      </div>
    </div>
  );
};

export default Navbar;
