import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo-text">
        <span>
          <h1>Tuisku Kaikuvuo</h1>
        </span>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", , "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />

            <NavLink end to={item === "home" ? "/" : item}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            {["home", "about", "work", "skills", "contact"].map((item) => (
              <ul>
                <li key={`link-${item}`}>
                  <NavLink
                    end
                    to={item === "home" ? "/" : item}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              </ul>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
