import React from "react";
import Navbar from "./Navbar";
import Budget from "./Budget";

function Container({ children }) {
  return (
    <div className="MAIN mx-5   flex flex-col gap-4 ">
      <Navbar />
      {children}
    </div>
  );
}

export default Container;
