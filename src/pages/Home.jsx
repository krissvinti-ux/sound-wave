import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-6 text-white">
            <h1 className="display-2 fw-normal mb-2">
              Feel The Music
            </h1>
            <p className="lead mb-4 fw-semibold">
              Stream over 20 thousand songs with one <br/>
              click
            </p>
            <Link to="/join" className="btn btn-primary btn-lg px-3">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;