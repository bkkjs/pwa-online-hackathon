import React from 'react';

const Rules = () =>
(
  <div>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            &lt;Rules & FAQ /&gt;
          </h1>
          <h2 className="subtitle">
            กฎ กติกา และคำถามที่พบบ่อย
          </h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="content">
          <h2 className="title is-2">Rules</h2>
          <ol>
            <li>A team must consist of 2-5 members</li>
            <li>We provide you 48 hours to build a web application. Any development before or after that is strictly prohibited.</li>
            <li>During the 48-hour hackathon, every participant should constantly push his code to the GitHub.</li>
            <li>The final web application must be deployed on Firebase Hosting.</li>
            <li>There are conditions for eligible web application. Only eligible submissions will be included in judging process.</li>
          </ol>
          <h2 className="title is-2">Conditions for eligible web application</h2>
          <ul>
            <li>Writing own API is not allowed</li>
            <li>
              Only usage of these public APIs are allowed.
              <ul>
                <li>Facebook API</li>
                <li>Instagram API</li>
                <li>Google API</li>
                <li>Twitter API</li>
                <li>GitHub API</li>
              </ul>
            </li>
            <li>All public frontend libraries are allowed</li>
            <li>Submitted web application must have manifest file (can be added to home screen) and service worker installed.</li>
            <li>Submitted web application must be partially functional without internet access.</li>
          </ul>
          <h2 className="title is-2">Firebase rules</h2>
          <p>
            We allow usage of Firebase services. But for Cloud Function for Firebase, we only allow following actions. 
          </p>
          <ul>
            <li>Modifying data in Firebase real-time database</li>
            <li>Modifying data in Firebase Storage</li>
            <li>Sending push notification to web application</li>
            <li>Creating callback endpoint for login API</li>
            <li>Sending email to users</li>
          </ul>
          <h2 className="title is-2">Criteria</h2>
          <p>We judge your submission based on these criteria (Total 100 points)</p>
          <ul>
            <li>Completeness of the web application</li>
            <li>Creativity</li>
            <li>Technologies used</li>
          </ul>
          <p>Bonus points</p>
          <ul>
            <li>Able to score over 98 points in Lighthouse test.</li>
            <li>Enable push notification</li>
            <li>Usage of Geolocation API or GetUserMedia API</li>
            <li>Developing Web VR application</li>
          </ul>
          <p>
            All submission be scored by our judging committee.
          </p>
          <h2 className="title is-2">FAQs</h2>
          <p><strong>Q: Can I use API other than listed?</strong></p>
          <p>A: If you want to use any API other than those listed above, please send us detail of the API. We will consider it in case-by-case basis. The condition is that the API must be public and free to use. Once approved, other team will be able to use the API as well.</p>
          <p><strong>Q: I am not currently in Thailand, can I join?</strong></p>
          <p>A: Sure! But should there be any prize or gift, we will deliver only to Thailand address.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Rules;
