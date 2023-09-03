/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>About</span> Us
        </h1>
        <div className="row">
          <div className="image">
            <img
              src="https://codingcirculate-restaurant-design.on.fleek.co/static/media/about-img.b50db0fa2bfd668b3a06"
              alt="about-img"
              srcset=""
            />
          </div>
          <div className="content">
            <h3>What Makes Our Food Special?</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
              Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae
              Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis
              Cupiditate. Ex, Vel?
            </p>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
              Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae
              Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis
              Cupiditate. Ex, Vel?
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
