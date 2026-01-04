import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-semibold" to="/">
                    <img src="src/images/logo.png" alt="logo" width="30" height="30" className=" d-inline-block align-text-top me-2" />
                    Soundwave
                </Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item text-white">
                            <Link className="nav-link " to="/discover">Discover</Link>
                        </li>
                        <li className="nav-item text-white ">
                            <Link className="nav-link" to="/Join">Join</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;