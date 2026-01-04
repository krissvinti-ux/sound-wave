import React from 'react';
import { useLocation } from "react-router-dom";

const Footer = () => {

    const { pathname } = useLocation();
    if (pathname === "/") return null;

    return (
        <footer className="bg-dark text-white p-1 text-nowrap">
            <div className="container justify-content-start align-items-left gap-5 ">
                <div className="d-flex gap-3">
                    <p className="word1">About Us </p>
                    <p className="word2">Contact</p>

                    <div className="container justify-content-right align-items-right gap-5"></div>
                    <i class="bi bi-twitter"></i><p className="word3">Twitter</p>
                    <i class="bi bi-facebook"></i><p className="word4">Facebook</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; <i class="bi bi-facebook"></i>