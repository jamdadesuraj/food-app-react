import React from "react";
import { review } from "../Data";
import quoteImg from "../assets/quote.png";

const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          Customer's <span>Review</span>
        </h1>
        <div className="box-container">
          {review &&
            review.map((reiew, index) => (
              <div className="box" key={index}>
                <img src={quoteImg} alt="quoteImg" className="quote" />
                <p>
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi
                  Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut
                  Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex
                  Aliquam Minus Vel? Nemo.
                </p>
                <img src={reiew.img} alt="client-img" className="user" />
                <h3>Jon Deo</h3>
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-alt"></i>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Review;
