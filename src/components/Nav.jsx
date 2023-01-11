import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import cross from '../assets/Cross.svg'

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
    console.log("menu opened");
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
    console.log("menu closed");
  }

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          Movie<span className="brand">Favs</span>
        </div>
      </Link>

      <div>
        <ul class="nav__link--list">
          <Link to="/">
            <li className="nav__links">
              <a href="" className="nav__link nav__link--hover-effect">
                Home
              </a>
            </li>
          </Link>

          <Link>
            <li className="nav__links">
              <a href="" className="nav__link nav__link--primary-btn no-drop">
                Contact
              </a>
            </li>
          </Link>

          <button className="nav__icon" onClick={openMenu}>
            <div className="nav__icon-bars"></div>
            <div className="nav__icon-bars"></div>
            <div className="nav__icon-bars"></div>
          </button>
        </ul>
      </div>

      <div className="menu__backdrop">
        <img className="backdrop__menu-close-btn" src={cross} alt="close-button" onClick={closeMenu}/>
        <ul className="backdrop__menu-links">
          <li className="backdrop__menu-link">Home</li>
          <li className="backdrop__menu-link">Find Movies</li>
          <li className="backdrop__menu-link nav__link--primary-btn no-drop">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
