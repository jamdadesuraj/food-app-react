/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            FRESH <span>FOOD IN THE</span> MORNING
          </h3>
          <p>
            Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Placeat
            Labore, Sint Cupiditate Distinctio Tempora Reiciendis.
          </p>
          {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="btn">
            Get Yours Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
