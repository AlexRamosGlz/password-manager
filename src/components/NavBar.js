import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { FcMenu } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSmallDash } from "react-icons/ai";

const NavBar = () => {
  const isOpen = useSelector((state) => state.open.value);
  console.log(isOpen);

  return (
    <div className={isOpen ? "nav__bar" : "nav__bar hidden"}>
      <h2>PassWord Generator</h2>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "navLink navLink__selected" : "navLink"
            }
          >
            <p> Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "navLink navLink__selected" : "navLink"
            }
          >
            <p>About</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/passwords"}
            className={({ isActive }) =>
              isActive ? "navLink navLink__selected" : "navLink"
            }
          >
            <p>Passwords</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
