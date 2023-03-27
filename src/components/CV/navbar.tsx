import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export default function Navbar() {
    const navigate = useNavigate()

    const { setUser } = useContext(AuthContext);

    const lastname = useContext(AuthContext).user?.user.lastname;
    const firstname = useContext(AuthContext).user?.user.firstname;

    const logOut = () => {
        setUser(null);
    };
    

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bonjour {lastname} {firstname}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">HOME</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profil
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item">Admin</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item">Consultant</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-outline-danger mt-4" onClick={logOut}>Déconnexion</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}