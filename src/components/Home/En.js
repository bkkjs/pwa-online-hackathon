import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import SponsorsContent from "../Sponsors/ContentEn";
const Home = () =>
(
  <div>
    <section className="hero is-primary home-hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            &lt;Welcome to PWA Online Hackathon /&gt;
          </h1>
          <h2 className="subtitle is-4">
            We challenge you to make awesome PWA with in 48 hours
          </h2>
          <p></p>
          <h1 className="title is-3">
            23 June 2017 8:00 PM - 25 June 2017 8:00 PM
          </h1>
          <p className="register-button">
            <Link className="button is-warning is-focused is-large" to="/apply">Register</Link>
          </p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="content">
          <h2 className="title is-4">What is PWA Online hackathon?</h2>
          <p>
            PWA Online Hackathon is a 48-hour hackathon. Since it is an online hackathon, participants can submit the code from anywhere. Just submit your code and win the prize!
          </p>
          <div className="columns">
            <div className="column">
              <h2 className="title is-5">Rules</h2><br/>
              There are numbers of rules but the most important one is that you must develop a web application that without backand API. You can read detailed rules <Link to="/en/rules">here</Link>.
            </div>
            <div className="column">
              <h2 className="title is-5">Prizes</h2>
              We have alot of prize such as Google Pixel, Google Chrome book, Google chrome cast but too long to list here. Please follow this <Link to="/prizes">link</Link>.
            </div>
          </div>

          <p className="register-button"><Link className="button is-warning is-focused is-large" to="/apply">Register</Link></p>
        </div>
      </div>
    </section>
    <SponsorsContent />
  </div>
);

export default Home;
