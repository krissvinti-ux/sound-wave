import React from 'react';
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  return (
    <footer className="bg-dark text-white py-2">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex flex-wrap gap-3">
            <p className="mb-0">About Us</p>
            <p className="mb-0">Contact</p>
          </div>

          <div className="d-flex flex-wrap align-items-center gap-3">
            <span className="d-flex align-items-center gap-2">
              <i className="bi bi-twitter"></i>
              <span>Twitter</span>
            </span>
            <span className="d-flex align-items-center gap-2">
              <i className="bi bi-facebook"></i>
              <span>Facebook</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
