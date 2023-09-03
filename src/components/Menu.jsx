/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { menu } from "../Data";

const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          Our <span>Menu</span>{" "}
        </h1>
        <div className="box-container">
          {menu &&
            menu.map((menu, index) => (
              <div className="box" key={index}>
                <img src={menu.img} alt="menu-img" />
                <h3>Tasty & Healthy</h3>
                <p className="price">
                  &19.99 <span>20.50</span>
                </p>
                <a href="#" className="btn">
                  {" "}
                  ADD To Cart
                </a>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
