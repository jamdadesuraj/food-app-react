/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-instagram"></a>
        </div>
        <div className="links">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">menu</a>
          <a href="#">products</a>
          <a href="#">review</a>
          <a href="#">contact</a>
          <a href="#">blog</a>
        </div>
        <div className="credit">
          created by <span>suraj jamdade</span> | all rights resived
        </div>
      </section>
    </>
  );
};

export default Footer;
