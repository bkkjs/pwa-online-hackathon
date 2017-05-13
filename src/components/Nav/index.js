import React from 'react';
import {
  Route, Link
} from 'react-router-dom';
import logo from './logo-nav.png';
import './Nav.css';

const Nav = (props) =>
(
  <nav className="nav">
    <div className="container">
      <div className="nav-left">
        <div className="nav-item">
          <div className="field is-grouped">
            <p className="control">
              <a className="button is-warning" href="https://docs.google.com/forms/d/e/1FAIpQLSdRYNtdVVrS4231JNelqkD_YsaTCnMXqego2twVtGSk5eRk5g/viewform?usp=sf_link" target="_blank">
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
        <Route path="/en" component={
          () =>
            <Link to="/" className="nav-item">
              ไทย
            </Link>
        }/>
        <Route path={/^\/(?!en)/} component={
          () =>
            <Link to="/en" className="nav-item">
              ENG
            </Link>
        }/>
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
      <Route path="/en" component={
        () =>
          <div className="nav-right nav-menu">
            <Link to="/en" className="nav-item">
              Home
            </Link>
            <Link to="/en/rules" className="nav-item">
              Rules & FAQ
            </Link>
            <Link to="/en/prizes" className="nav-item">
              Prizes
            </Link>
            <Link to="/en/resources" className="nav-item">
              Resources
            </Link>
            <Link to="/en/sponsors" className="nav-item">
              Sponsors
            </Link>
          </div>
        }/>
      <Route path={/^\/(?!en)/} component={
        () =>
          <div className="nav-right nav-menu">
            <Link to="/" className="nav-item">
              หน้าแรก
            </Link>
            <Link to="/rules" className="nav-item">
              กฎกติกา
            </Link>
            <Link to="/prizes" className="nav-item">
              ของรางวัล
            </Link>
            <Link to="/resources" className="nav-item">
              ข้อมูล
            </Link>
            <Link to="/sponsors" className="nav-item">
              ผู้สนับสนุน
            </Link>
          </div>
      }/>
    </div>
  </nav>
);

export default Nav;
