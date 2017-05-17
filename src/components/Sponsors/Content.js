import React from 'react';
import Logo3DS from './logos/3ds.png';
import LogoNextzy from './logos/nextzy.png';
import LogoPantip from './logos/pantip.png';
import LogoSellsuki from './logos/sellsuki.png';
import LogoSprint3r from './logos/sprint3r.png';
import LogoTencent from './logos/tencent.png';
import LogoThoth from './logos/thothzocial.png';
import LogoFirebase from './logos/firebase.png';
import LogoGoogleDeveloper from './logos/lockup-color.svg';
import './Sponsors.css';

const SponsorsContent = () =>
(
  <section className="section">
    <div className="container">
      <div className="content sponsor-header">
        <h2 className="title is-3">Sponsors ผู้ใจดี</h2>
      </div>
      <div className="content has-text-centered">
        <div className="platinum-sponsors">
          <img src={LogoGoogleDeveloper} alt="logo" />
          <img src={LogoSellsuki} alt="logo" />
          <img src={LogoSprint3r} alt="logo" />
          <img src={LogoTencent} alt="logo" />
          {/*<img src={LogoFirebase} alt="logo" />*/}
        </div>
        <div className="gold-sponsors">
          <img src={Logo3DS} alt="logo" />
          <img src={LogoNextzy} alt="logo" />
          <img src={LogoPantip} alt="logo" />
          <img src={LogoThoth} alt="logo" />
        </div>
      </div>
    </div>
  </section>
);

export default SponsorsContent;
