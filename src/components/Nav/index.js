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
      <div className="nav-left is-hidden-desktop">
        <div className="nav-item"><img src={logo} alt="PWA Online Hackathon logo" /> <h5 className="is-6">PWA Online Hackathon </h5></div>
      </div>
      <div className="nav-left is-hidden-mobile">
        <div className="nav-item">
          <div className="field is-grouped">
            <p className="control">
            </p>
            <p className="control">
              <a className="button" href="https://m.me/web.developer.th" target="_blank" rel="noopener">
                <span className="icon">
                  <i className="fa fa-envelope"></i>
                </span>
                <span>Contact</span>
              </a>
            </p>
          </div>
        </div>
        <a className="nav-item" href="https://github.com/bkkjs/pwa-online-hackathon" target="_blank" rel="noopener">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a className="nav-item" href="https://www.facebook.com/web.developer.th" target="_blank" rel="noopener">
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
              Eng
            </Link>
        }/>
      </div>
      <div className="nav-center is-hidden-mobile">
        <Link to="/" className="nav-item logo">
          <img src={logo} alt="PWA Online Hackathon logo" />
        </Link>
      </div>
      <span className="nav-toggle" onClick={() => { let toggle = document.querySelector(".nav-toggle"); let menu = document.querySelector(".nav-menu"); toggle.classList.toggle("is-active"); menu.classList.toggle("is-active"); }}>
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
