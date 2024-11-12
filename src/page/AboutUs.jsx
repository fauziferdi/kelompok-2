// src/components/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us py-5 px-4">
      <div className="container-fluid">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex flex-column align-items-center card">
            <div className="w-100">
              <h3 className="text-center">Our Story</h3>
              <p className="">
                Welcome to our milkshake paradise! We are dedicated to providing
                the best and most unique milkshake flavors. Our team consists of
                passionate individuals who love experimenting with flavors and
                crafting delicious drinks.
              </p>
              <p className="">
                Our mission is to bring you joy with every sip of our
                milkshakes, made with high-quality ingredients and a lot of
                love.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center">
            <h3 className="text-center">Our Team</h3>
            <div className="d-flex justify-content-around">
              <div className="card m-1 p-3">
                <img
                  src="https://via.placeholder.com/200"
                  alt="Sarah Lee"
                  className="card-img-top img-fluid rounded-circle"
                />
                <div className="card-body text-center ">
                  <h5 className="card-title fs-6">Riki</h5>
                </div>
              </div>
              <div className="card m-1 p-3">
                <img
                  src="https://via.placeholder.com/200"
                  alt="Sarah Lee"
                  className="card-img-top img-fluid rounded-circle"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fs-6">Fauzi</h5>
                </div>
              </div>
              <div className="card m-1 p-3">
                <img
                  src="https://via.placeholder.com/200"
                  alt="Sarah Lee"
                  className="card-img-top img-fluid rounded-circle"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fs-6">Fery</h5>
                </div>
              </div>
              <div className="card m-1 p-3">
                <img
                  src="https://via.placeholder.com/200"
                  alt="Sarah Lee"
                  className="card-img-top img-fluid rounded-circle"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fs-6">Devran</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

