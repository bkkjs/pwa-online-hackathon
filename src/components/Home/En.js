import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import SponsorsContent from "../Sponsors/ContentEn";

const Home = () =>
(
  <div>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            &lt;Welcome to PWA Online Hackathon /&gt;
          </h1>
          <h2 className="subtitle">
            The first online hackathon in Thailand
          </h2>
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
          <h2 className="title is-4">Rules</h2>
          <p>
            There are numbers of rules but the most important one is that you must develop a web application that without backand API. You can read detailed rules <Link to="/en/rules">here</Link>.
          </p>
          <h2 className="title is-4">Prizes</h2>
          <p>
            We have alot of prize such as Google Pixel, Google Chrome book, Google chrome cast but too long to list here. Please follow this <Link to="/prizes">link</Link>.
          </p>
          <p className="register-button"><a className="button is-warning is-focused is-large">Register Soon</a></p>
        </div>
      </div>
    </section>
    <SponsorsContent />
  </div>
);

export default Home;
