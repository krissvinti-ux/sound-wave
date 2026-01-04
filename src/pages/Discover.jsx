import React from "react";
import { Link } from "react-router-dom";
import bgDiscover from "../images/background-grey.png"; 

const Discover = () => {
  return (
    <div
      className="min-vh-100"
      style={{
        backgroundImage: `url(${bgDiscover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container w-100 ms-lg-auto">
        <div className="row align-items-start gx-0 gy-4">
          <div className="col-12 col-md-7 text-center text-md-start">
            <div className="fs-6 text-white mt-3 mt-md-5">
              <h2 className="display-6 fw-normal text-white">Discover new music</h2>
            </div>

            <div className="d-flex flex-wrap justify-content-start gap-3 fs-6 text-white position-relative mt-5">
              <div className="d-flex flex-column align-items-center bg-dark text-white p-3">
                <i className="bi bi-bar-chart-fill"></i>
                <span>Charts</span>
              </div>
              <div className="d-flex flex-column align-items-center bg-dark text-white p-3">
                <i className="bi bi-stack"></i>
                <span>Albums</span>
              </div>
              <div className="d-flex flex-column align-items-center bg-dark text-white p-3">
                <i className="bi bi-arrow-right-circle-fill"></i>
                <span>More</span>
              </div>
            </div>

            <p className="fs-6 text-white position-relative mt-5">
              By joining you can benefit by listening to the lastest album released
            </p>
          </div>

          <div className="col-5 col-md-5 d-flex justify-content-start mt-5">
            <img
              src="/src/images/covers.jpg"
              alt="Album covers"
              className="img-fluid"
              style={{ maxWidth: "240px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
