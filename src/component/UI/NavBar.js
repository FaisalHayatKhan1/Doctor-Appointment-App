import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light p-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-1" to="/">
            Home
          </NavLink>
          <div className="collapse navbar-collapse justify-content-end pe-5">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link fs-3 mx-2" to="/bookAppoitment">
                  Book An Appointment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-3 mx-2" to="/ShowAppoitment">
                  All appointments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-3 mx-2" to="/doctordetail/sdasdas">
                  doctor detail
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
