import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 border p-4 color-primary">
          <div className="card-header text-center">
            <h4>Login</h4>
          </div>
          <form className=" p-4">
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
            <Link to="/profile">
              <button type="submit" className="btn btn-outline-primary my-2">
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
              Belum Punya Akun ?{" "}
              <Link to="/register" className="text-primary">
                Daftar di Sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
