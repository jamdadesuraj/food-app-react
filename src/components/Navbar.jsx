/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import Logo from "../assets/logo.png";
import { cart } from "../Data";

const Navbar = () => {
  const searchRef = useRef("");
  const cartRef = useRef("");
  const navbarRef = useRef("");

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          <img src={Logo} alt="logo" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blog</a>
        </nav>
        <div className="icons">
          <div className="fas fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-bag" onClick={cartHandler}></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form " ref={searchRef}>
          <input type="search" placeholder="search here..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart &&
            cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <span className="fa fa-times"></span>
                <img src={item.img} alt="cart-img" />
                <div className="content">
                  <h3>cart items 01</h3>
                  <div className="price">$ 99.99 /-</div>
                </div>
              </div>
            ))}
          {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="btn btn-warning">
            Checkout Now
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
