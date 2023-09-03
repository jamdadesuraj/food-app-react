/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>Blogs</span>
        </h1>
        <div className="box-container">
          {blog &&
            blog.map((blog, index) => (
              <div className="box" key={index}>
                <div className="image">
                  <img src={blog.img} alt="blog-img" />
                </div>
                <div className="content">
                  <a href="#" className="title">
                    spicy and testy
                  </a>
                  <span>by admin / 22 /09 /2023</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate, libero. Laborum modi possimus in ut.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
