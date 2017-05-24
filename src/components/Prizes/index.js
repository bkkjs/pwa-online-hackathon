import React from 'react';
import './Prizes.css';

const Prizes = () =>
(
  <div>
    <section className="hero is-primary prize-hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            &lt;Prizes /&gt;
          </h1>
          <h2 className="subtitle is-4">
            ของรางวัล
          </h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="content">
          <p className="prize-header">การแข่งขัน PWA Online Hackathon ครั้งนี้แบ่งรางวัลออกเป็นทั้งหมด 4 รางวัล ดังนี้</p>
          <div className="columns">
            <div class="column">
              <h2 className="title is-4 prize-title">รางวัลอันดับ 1</h2>
              <ul>
                <li>1 x Pixel Phone</li>
                <li>Google Cloud Credit 5,000 USD</li>
                <li>5 x 1 year Joox VIP codes</li>
                <li>10,000 THB cash from Sellsuki</li>
              </ul>
            </div>
            <div class="column">
              <h2 className="title is-4 prize-title">รางวัลรองอันดับ 1</h2>
              <ul>
                <li>1 x Chromebook</li>
                <li>Google Cloud Credit 3,000 USD</li>
                <li>5x 1 month Joox VIP codes</li>
              </ul>
            </div>
            <div class="column">
              <h2 className="title is-4 prize-title">รางวัลรองอันดับ 2</h2>
              <ul>
                <li>1 x Chromecast</li>
                <li>Google Cloud Credit 2,000 USD</li>
                <li>5x 1 month Joox VIP codes</li>
              </ul>
            </div>
            <div class="column">
              <h2 className="title is-4 prize-title">รางวัล Firebase ยอดเยี่ยม</h2>
              <ul>
                <li>Google Cloud Credit 1,000 USD</li>
                <li>5x 1 month Joox VIP codes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Prizes;
