/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { product } from "../Data";
const Products = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          Our <span>products</span>
        </h1>
        <div className="box-container">
          {product &&
            product.map((menu, index) => (
              <div className="box" key={index}>
                <div className="icons">
                  {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */},
                  {/* jsx-a11y/anchor-is-valid */}
                  <a href="#" className="fa fa-shopping-bag"></a>
                  <a href="#" className="fa fa-heart"></a>
                  <a href="#" className="fa fa-eye"></a>
                  <div className="image">
                    <img src={menu.img} alt="img" />
                  </div>
                  <div className="content">
                    <h3>Fresh Coffee</h3>
                    <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-alt"></i>
                    </div>
                    <div className="price">
                      $15.99 <span>20.99</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Products;
