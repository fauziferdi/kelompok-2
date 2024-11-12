import React from "react";

const Home = () => {
  return (
    <main className="container-fluid bg-custom">
      <section className="banner py-4 d-flex flex-column-reverse flex-md-row align-items-center justify-content-between container">
        <div className="text-center text-md-start">
          <h1 className="fs-4 fw-light">Freshly Roasted</h1>
          <h1 className="h1-custom">Coffee</h1>
          <p className="pe-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloribus voluptas dolorum, nesciunt laborum veritatis nihil! Ut mollitia amet libero.</p>
          <a href="#" className="btn btn-outline-primary">Shop Now</a>
        </div>

        <div className="d-md-block w-100">
          <img src="https://picsum.photos/600/600" alt="Coffee" className="rounded-5 w-100" />
        </div>
      </section>

      <section className="top-categories mt-5">
        <div className="d-flex flex-column align-items-center">
          <h2 className="fs-1 fw-bold">TOP CATEGORIES</h2>
          <p className="fw-semibold fs-4 mt-2 text-center">Explore The Recent Most Bought Drinks This Week</p>
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="" key={index}>
                <div className="category-card position-relative">
                  <img src="https://picsum.photos/400/300" className="img-desaturate rounded-5" alt="Coffee Mocha" />
                  <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
                    <h5 className="mt-3 fs-2 text-white">Coffee Mocha</h5>
                    <a href="#" className="btn text-white">View More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="top-categories mt-5 container">
        <div className="d-flex flex-column align-items-center">
          <h2 className="fs-1 fw-bold">TOP MILK SHAKES</h2>
          <p className="fw-semibold fs-4 mt-2 text-center">Explore The Recent Most Bought Drinks This Week</p>
          <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="category-card-wrapper" key={index}>
                <div className="category-card position-relative">
                  <img src="https://picsum.photos/300/400" className="img-desaturate rounded-5" alt="Coffee Mocha" />
                  <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
                    <h5 className="mt-3 fs-2 text-white">Coffee Mocha</h5>
                    <a href="#" className="btn text-white">View More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
