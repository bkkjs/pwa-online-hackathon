import React from 'react';

const Prizes = () =>
(
  <div>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            &lt;Prizes /&gt;
          </h1>
          <h2 className="subtitle">
            ของรางวัล
          </h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="content">
          <p>การแข่งขัน PWA Online Hackathon ครั้งนี้แบ่งรางวัลออกเป็นทั้งหมด 4 รางวัล ดังนี้</p>
          <h2 className="title is-2">รางวัลอันดับ 1</h2>
          <ul>
            <li>Pixel Phone</li>
            <li>Chromebook</li>
            <li>Chromecast</li>
            <li>Google Cloud Credit 5,000 USD</li>
            <li>5x 1 year Joox VIP codes</li>
            <li>10,000 THB cash from Sellsuki</li>
          </ul>
          <h2 className="title is-2">รางวัลรองอันดับ 1</h2>
          <ul>
            <li>Google Cloud Credit 3,000 USD</li>
            <li>5x 1 month Joox VIP codes</li>
          </ul>
          <h2 className="title is-2">รางวัลรองอันดับ 2</h2>
          <ul>
            <li>Google Cloud Credit 2,000 USD</li>
            <li>5x 1 month Joox VIP codes</li>
          </ul>
          <h2 className="title is-2">รางวัล Firebase ยอดเยี่ยม</h2>
          <ul>
            <li>Google Cloud Credit 1,000 USD</li>
            <li>5x 1 month Joox VIP codes</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default Prizes;
