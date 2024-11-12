import React from "react";

const Profile = () => {
  return (
    <div className="container mb-5">
      <h1 className="text-center mt-5 mb-5  ">Profile</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Profile User</h5>
              <img
                className="rounded mx-auto d-block"
                src="https://picsum.photos/200/200"
                alt="Foto Profil"
              />
              <br></br>
              <h6 className="card-subtitle mb-2 text-center fs-4">John Doe</h6>
              <h6 className="card-subtitle mb-2 text-muted text-center">
                Jakarta, Indonesia
              </h6>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus veniam iure ad soluta doloremque cupiditate
                reprehenderit velit ab fugiat ratione vel porro libero
              </p>
              <div className="d-flex justify-content-center">
                <button href="#" className="card-link btn btn-primary">
                  Edit Profile
                </button>
                <button href="#" className="card-link btn btn-primary">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title ">Data Pribadi Lainnya</h5>
                  <ul>
                    <li>
                      <strong>Nama Lengkap:</strong> John Doe
                    </li>
                    <li>
                      <strong>Email:</strong> johndoe@example.com
                    </li>
                    <li>
                      <strong>No. Telepon:</strong> +6281234567890
                    </li>
                    <li>
                      <strong>Tanggal Lahir:</strong> 1 Januari 1990
                    </li>
                    <li>
                      <strong>Alamat:</strong> Jl Bunokarno no 45 gemirin
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Social Media User </h5>
                  <ul>
                    <li>
                      <strong>Facebook :</strong>
                      <a
                        className="text-decoration-none"
                        href="https://www.facebook.com/john.doe"
                      >
                        John Doe
                      </a>
                    </li>
                    <li>
                      <strong>Email:</strong>
                      <a
                        className="text-decoration-none"
                        href="https://www.facebook.com/john.doe"
                      >
                        John Doe
                      </a>
                    </li>
                    <li>
                      <strong>Instagram</strong>
                      <a
                        className="text-decoration-none"
                        href="https://www.facebook.com/john.doe"
                      >
                        John Doe
                      </a>
                    </li>
                    <li>
                      <strong>Github</strong>
                      <a
                        className="text-decoration-none"
                        href="https://www.facebook.com/john.doe"
                      >
                        John Doe
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
