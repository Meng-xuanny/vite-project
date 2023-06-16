import React from "react";
import UserContainer from "./UserContainer";

const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
      </ul>

      <UserContainer />
    </div>
  );
};

export default NavLinks;
