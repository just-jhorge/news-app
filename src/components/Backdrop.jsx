import React from "react";

const Backdrop = ({ show, clicked }) => {
  return show ? (
    <div
      className="w-full h-full fixed z-[100] left-0 top-0 bg-black/70"
      onClick={clicked}
    />
  ) : null;
};

export default Backdrop;
