import React from 'react';
import './Resources.css';

const Resources = () =>
(
  <div>
    <section className="hero is-primary resource-hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            &lt;Resources /&gt;
          </h1>
          <h2 className="subtitle is-4">
            แหล่งความรู้ต่าง ๆ
          </h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1 className="title is-4">Video</h1><br/>
          <div className="columns">
            <div className="column">
              <h1 className="title is-5">Progressive Web Apps course</h1>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLNYkxOF6rcIAdnzEsWkg0KpMn2WJwMBmN&hl=en_US" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="column">
              <h1 className="title is-5">Totally Tooling Tips: Progressive Web Apps</h1>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLNYkxOF6rcIBiVPNwYbM6Y7gtp9NLbwG2&hl=en_US" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Resources;
