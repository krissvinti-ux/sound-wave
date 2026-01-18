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
      <div className="container py-5">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-md-7 text-center text-md-start">
            <h2 className="display-6 fw-normal text-white">Discover new music</h2>

            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 fs-6 text-white mt-4">
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

            <p className="fs-6 text-white mt-4 mb-0">
              By joining you can benefit by listening to the lastest album released
            </p>
          </div>

          <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start">
            <img
              src="/src/images/covers.jpg"
              alt="Album covers"
              className="img-fluid"
              style={{ maxWidth: "280px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
