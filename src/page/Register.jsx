import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-4 border p-4 color-primary">
          <div className="card-header text-center">
            <h4>Register</h4>
          </div>
          <form className=" p-4">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control my-2"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="noHp">Telfone</label>
              <input
                type="text"
                className="form-control my-2"
                id="noHp"
                name="noHp"
                placeholder="Telfone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control my-2"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control my-2"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <Link to="/login">
              <button
                type="submit"
                className="btn btn-outline-primary btn-block my-2"
              >
                Masuk
              </button>
            </Link>
          </form>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1 border-top"></div>
            <span className="mx-2">Atau</span>
            <div className="flex-grow-1 border-top"></div>
          </div>
          <div className="text-center mt-3">
            <p>
              Punya Akun ?{" "}
              <Link to="/login" className="text-primary">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
