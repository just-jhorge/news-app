import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ link, children }) => {
  return (
    <li>
      <Link to={link} className="font-semibold">
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
