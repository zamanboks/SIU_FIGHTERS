import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../Image/Bondu.jpg';

import './Nexbar.css';
const Nevbar = () => {

    return (
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} className="bondulogo" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink to="/" exact className="nav-link">Home </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/MozarSateSikho" exact className="nav-link">
                                Mozar Sate Sikho
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/ShohozeShikhe" exact className="nav-link">
                                Shoze Shikhe
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Ami Shera</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nevbar;