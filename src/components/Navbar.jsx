import React from "react";
import logo from "../assets/logo.svg";
import "../css/navbar.scss";
import { Link } from "react-router-dom";
import { BiSearch, BiShoppingBag, BiExit } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="brand">
        <img src={logo} alt="Logo MLC" />
      </Link>
      <sideMenu>..............................</sideMenu>

      <nav className="nav">
        <ul className="menu">
          <li>
            <Link
              to="/"
              className={window.location.pathname === "/" ? "active" : "hello"}
            >
              特別企劃
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className={
                window.location.pathname === "/news" ? "active" : "hello"
              }
            >
              原創設計
            </Link>{" "}
          </li>
          <li>
            <Link
              to="/events"
              className={
                window.location.pathname === "/events" ? "active" : "hello"
              }
            >
              品牌合作
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                window.location.pathname === "/about" ? "active" : "hello"
              }
            >
              關於我們
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                window.location.pathname === "/about" ? "active" : "hello"
              }
            >
              經銷門市
            </Link>
          </li>

          <li>
            <Link to="tel:+243811533644">
              <BiSearch className="icon2" size={26} color="white" />
            </Link>

            <Link to="tel:+243811533644">
              <BiShoppingBag className="icon2" size={26} color="white" />
            </Link>

            <Link to="tel:+243811533644">
              <BiExit className="icon2" size={26} color="white" />
            </Link>
          </li>

          <button className="btn-primary">註冊</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
