/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          Contact <span>Us</span>
        </h1>
        <div className="row">
          {/* // eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.7090637025!2d73.69814927513373!3d18.524870615022554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693719631496!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            className="map"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <form action="">
            <h3>Get In Touch</h3>
            <div className="inputBox">
              <span className="fa fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div className="inputBox">
              <span className="fa fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <span className="fa fa-phone"></span>
              <input type="number" placeholder="phone" />
            </div>
            <input type="submit" value="contact now" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
