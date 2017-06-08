import React from 'react';
import './Prizes.css';
import gcpIcon from './googlecloudplatform-logo-1-1024x265.png';
import jooxIcon from './Joox_icon.png';
import sellsukiIcon from './sellsuki.png';
import skootarIcon from './skootar.png';
import wongnaiIcon from './wongnai.png';
import papakumaIcon from './logo_papakuma_bgwhi.png';
import giftPic from './gift.jpg';
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
            <div className="column">
              <h2 className="title is-4 prize-title">รางวัลอันดับ 1</h2>
              <ul>
                <li>1 x Pixel Phone</li>
                <li><img src={gcpIcon} alt=""/> <br />Google Cloud Credit 5,000 USD</li>
                <li><img src={jooxIcon} alt=""/> <br /> 5 x 1 year Joox VIP codes</li>
                <li><img src={sellsukiIcon} alt=""/> <br /> 10,000 THB cash from Sellsuki</li>
                <li><img src={skootarIcon} alt=""/> <br /> 5,000 THB Skootar credit</li>
                <li><img src={wongnaiIcon} alt=""/> <br /> 1,000 THB LINEMAN credit</li>
                <li>Winner hoodie คนละ 1 ตัว</li>
                <li><img src={papakumaIcon} alt=""/> Winner cap จาก Papakuma คนละ 1 ใบ</li>
              </ul>
            </div>
            <div className="column">
              <h2 className="title is-4 prize-title">รางวัลรองอันดับ 1</h2>
              <ul>
                <li>1 x Chromebook</li>
                <li><img src={gcpIcon} alt=""/> <br /> Google Cloud Credit 3,000 USD</li>
                <li><img src={jooxIcon} alt=""/> <br /> 5x 1 month Joox VIP codes</li>
                <li><img src={skootarIcon} alt=""/> <br /> 2,000 THB Skootar credit</li>
                <li><img src={wongnaiIcon} alt=""/> <br /> 500 THB LINEMAN credit</li>
                <li>Winner hoodie คนละ 1 ตัว</li>
                <li><img src={papakumaIcon} alt=""/> Winner cap จาก Papakuma คนละ 1 ใบ</li>
              </ul>
            </div>
            <div className="column">
              <h2 className="title is-4 prize-title">รางวัลรองอันดับ 2</h2>
              <ul>
                <li>1 x Chromecast</li>
                <li><img src={gcpIcon} alt=""/> <br /> Google Cloud Credit 2,000 USD</li>
                <li><img src={jooxIcon} alt=""/> <br /> 5x 1 month Joox VIP codes</li>
                <li><img src={skootarIcon} alt=""/> <br /> 1,000 THB Skootar credit</li>
                <li><img src={wongnaiIcon} alt=""/> <br /> 500 THB LINEMAN credit</li>
                <li>Winner hoodie คนละ 1 ตัว</li>
                <li><img src={papakumaIcon} alt=""/> Winner cap จาก Papakuma คนละ 1 ใบ</li>
              </ul>
            </div>
            <div className="column">
              <h2 className="title is-4 prize-title">รางวัล Firebase ยอดเยี่ยม</h2>
              <ul>
                <li><img src={gcpIcon} alt=""/> <br /> Google Cloud Credit 1,000 USD</li>
                <li><img src={jooxIcon} alt=""/> <br /> 5x 1 month Joox VIP codes</li>
                <li><img src={skootarIcon} alt=""/> <br /> 1,000 THB Skootar credit</li>
                <li><img src={wongnaiIcon} alt=""/> <br /> 500 THB LINEMAN credit</li>
                <li>Winner hoodie คนละ 1 ตัว</li>
                <li><img src={papakumaIcon} alt=""/> Winner cap จาก Papakuma คนละ 1 ใบ</li>
              </ul>
            </div>
          </div>
          <div className="columns">
            <div className="column has-text-centered">
              <h2 className="title is-4 prize-title">200 คนแรกที่ Submit PWA</h2><br />
              <img src={giftPic} style={{maxWidth: '400px'}} alt=""/><br />
              สำหรับ <strong>200</strong> คนแรกเราเตรียมของเล็กๆน้อยๆไว้ให้ เป็น <strong>เสื้อ PWA online hackathon, Sticker และของเล็กๆ น้อยอื่นๆ</strong> 
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Prizes;
