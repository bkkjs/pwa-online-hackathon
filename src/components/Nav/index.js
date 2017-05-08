import React from 'react';
import {
  Route, Link
} from 'react-router-dom';
import logo from './logo-nav.png';
import './Nav.css';

const Nav = (props) =>
(
  <nav className="nav">
    <div className="nav-left">
      <div className="nav-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="button" >
              <span className="icon">
                <i className="fa fa-trophy"></i>
              </span>
              <span>Become a Sponsor</span>
            </a>
          </p>
          <p className="control">
            <a className="button" href="https://m.me/web.developer.th" target="_blank">
              <span className="icon">
                <i className="fa fa-envelope"></i>
              </span>
              <span>Contact</span>
            </a>
          </p>
        </div>
      </div>
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
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="rules" className="nav-item">
        Rules & FAQ
      </Link>
      <a className="nav-item">
        Prizes
      </a>
      <a className="nav-item">
        Resources
      </a>
      <a className="nav-item">
        Sponsors
      </a>
    </div>
  </nav>
);

export default Nav;
