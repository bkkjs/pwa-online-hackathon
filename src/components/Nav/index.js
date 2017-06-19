import React from 'react';
import {
  Route, Link
} from 'react-router-dom';
import logo from './logo-nav.png';
import './Nav.css';

import { connect } from 'react-redux';
import { actions } from '../../redux/reducers/application';
import { actions as dashboardActions } from '../../redux/reducers/dashboard';
import * as firebase from 'firebase';

class Nav extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAc7UsKVAInDJJh3DtKpzBlEmY0oQjRzm8",
      authDomain: "pwa-online-hackathon.firebaseapp.com",
      databaseURL: "https://pwa-online-hackathon.firebaseio.com",
      projectId: "pwa-online-hackathon",
      storageBucket: "pwa-online-hackathon.appspot.com",
      messagingSenderId: "445619580921"
    });
    firebase.auth().onAuthStateChanged((data) => {
      this.props.login(data);
      const announcementRef = firebase.database().ref('announcement');
      const userRef = firebase.database().ref(`users/${data.uid}`);
      const applicationsRef = firebase.database().ref('publicApplications');
      announcementRef.on('value', (snapshot) => {
        this.props.updateAnnouncement(snapshot.val());
      });
      userRef.on('value', (snapshot) => {
        this.props.setUser(snapshot.val());
      });
      applicationsRef.on('value', (snapshot) => {
        this.props.setApplications(snapshot.val());
      });
    })
  }
  render() {
    const { props } = this;
    const { githubUser } = props;
    return (
      <nav className="nav">
        <div className="container">
          <div className="nav-left is-hidden-desktop">
            <div className="nav-item"><img src={logo} alt="PWA Online Hackathon logo" /> <h5 className="is-6">PWA Online Hackathon </h5></div>
          </div>
          <div className="nav-left is-hidden-mobile">
            {
              !props.loggedIn &&
              <div className="nav-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button is-primary" onClick={props.loginWithGithub}>
                      <span className="icon">
                        <i className="fa fa-github"></i>
                      </span>
                      <Route path="/en" component={
                        () =>
                          <span>Login</span>
                      } />
                      <Route path={/^\/(?!en)/} component={
                        () =>
                          <span>เข้าสู่ระบบ</span>
                      } />
                    </a>
                  </p>
                </div>
              </div>
            }
            {
              props.loggedIn &&
              <Link to="/dashboard" className="nav-item">
                { githubUser.photoURL &&
                  <img src={githubUser.photoURL} alt="profile" className="profile-picture" />
                } {githubUser.displayName}
              </Link>
            }
            {
              props.loggedIn &&
              <a className="nav-item" onClick={() => {
                firebase.auth().signOut();
                props.logout();
              }}>
                Logout
              </a>
            }
            <a className="nav-item" href="https://m.me/web.developer.th" target="_blank" rel="noopener">
              <span className="icon">
                <i className="fa fa-envelope"></i>
              </span>
            </a>
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
  }
}

export default connect((state) => {
  const loggedIn = state.application.loggedIn;
  return {
    githubUser: state.application.githubUser,
    loggedIn,
    loginPending: state.application.loginPending,
  };
}, {
  loginWithGithub: actions.loginWithGithub,
  login: actions.login,
  logout: actions.logout,
  updateAnnouncement: dashboardActions.updateAnnouncement,
  setUser: dashboardActions.setUser,
  setApplications: dashboardActions.setApplications,
})(Nav);
