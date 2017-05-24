import React from 'react';
import SponsorsContent from './ContentEn';

const Sponsors = () =>
(
  <div>
    <section className="hero is-primary sponsors-hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            &lt;Sponsors /&gt;
          </h1>
          <h2 className="subtitle is-4">
            Our lovely sponsors
          </h2>
        </div>
      </div>
    </section>
    <SponsorsContent />
  </div>
);

export default Sponsors;
