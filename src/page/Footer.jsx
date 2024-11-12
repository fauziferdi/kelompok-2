import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start text-white">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6">
            <h5 class="fw-bold mb-3">About Website</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis
              enim fuga, ea quasi distinctio similique id, sapiente accusantium
              assumenda repellat fugiat ut libero dolore modi quidem commodi
              tenetur necessitatibus.
            </p>
          </div>

          <div class="col-md-3">
            <h5 class="fw-bold mb-3">Company Info</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="/about" class="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" class="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" class="text-white text-decoration-none">
                  Payment Option
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5 class="fw-bold mb-3">Follow Us</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-white text-decoration-none">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none">
                  <i class="bi bi-twitter-x"></i>
                </a>
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none">
                  <i class="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center p-3">
        <a class="text-white text-decoration-none" href="#">
          Kelompok 2 webiste
        </a>
      </div>
    </footer>
  );
};

export default Footer;
