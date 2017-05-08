import React from 'react';
import {
  Route, Link
} from 'react-router-dom';
import logo from './logo-nav.png';
import './Nav.css';

const Nav = () =>
(
  <nav className="nav">
    <div className="nav-left">
      <a className="nav-item" href="https://github.com/bkkjs/pwa-online-hackathon" target="_blank">
        <span className="icon">
          <i className="fa fa-github"></i>
        </span>
      </a>
      <a className="nav-item" href="https://www.facebook.com/web.developer.th" target="_blank">
        <span className="icon">
          <i className="fa fa-facebook"></i>
        </span>
      </a>
    </div>
    <div className="nav-center">
      <Link to="/" className="nav-item logo">
        <img src={logo} alt="PWA Online Hackathon logo" />
      </Link>
    </div>

    <span className="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div className="nav-right nav-menu">
      <a className="nav-item">
        Home
      </a>
      <a className="nav-item">
        Documentation
      </a>
      <a className="nav-item">
        Blog
      </a>

      <div className="nav-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="button" >
              <span className="icon">
                <i className="fa fa-twitter"></i>
              </span>
              <span>Tweet</span>
            </a>
          </p>
          <p className="control">
            <a className="button is-primary">
              <span className="icon">
                <i className="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
