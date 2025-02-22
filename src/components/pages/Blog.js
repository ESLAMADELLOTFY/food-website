import React from "react";
import CommonHeading from "../common/CommonHeading";
import { blog } from "../data/Item";

export default function Blog() {
  return (
    <>
      <div className="container-fluid blog py-6">
        <div className="container">
          <CommonHeading
            title="Our Blog"
            description="Be First Who Read News"
          />
          <div className="row gx-4 justify-content-center">
            {blog.map((val, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-4 wow bounceInUp"
                data-wow-delay="0.1s"
              >
                <div className="blog-item">
                  <div className="overflow-hidden rounded">
                    <img
                      src={val.img}
                      className="img-fluid w-100"
                      alt="img/blog-1.jpg"
                    />
                  </div>
                  <div className="blog-content mx-4 d-flex rounded bg-light">
                    <div className="text-dark bg-primary rounded-start">
                      <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                        <p className="fw-bold mb-0">{val.day}</p>
                        <p className="fw-bold mb-0">{val.month}</p>
                      </div>
                    </div>
                    <a href="#" className="h5 lh-base my-auto h-100 p-3">
                      {val.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}