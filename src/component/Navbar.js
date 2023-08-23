import '../navbarStyle.css';
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



export default function Navbar(props) {
  const darkModeClass = props.mode === "dark" ? "text-white" : "text-dark";
  const navbarColorClass = props.mode === 'light' ? 'bg-light-grey' : 'dark';

  return (
    <nav className={`navbar navbar-expand-lg ${navbarColorClass} bg-${navbarColorClass}`}>
      {/* <nav className="navbar bg-dark border-bottom border-body" ></nav> */}
      <div className="container-fluid">
        <Link className={`navbar-brand ${darkModeClass}`} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${darkModeClass}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${darkModeClass}`} to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch ${darkModeClass}`}>
            <input
              className="form-check-input "
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light" ? "Enable" : "Disable"} Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
