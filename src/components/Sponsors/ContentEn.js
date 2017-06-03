import React from 'react';
import Logo3DS from './logos/3ds.png';
import LogoNextzy from './logos/nextzy.png';
import LogoPantip from './logos/pantip.png';
import LogoSellsuki from './logos/sellsuki.png';
import LogoSprint3r from './logos/sprint3r.png';
import LogoTencent from './logos/tencent.jpg';
import LogoThoth from './logos/thothzocial.png';
import LogoCleverse from './logos/cleverse.png';
import LogoDonut from './logos/donut.png';
import LogoGoogleDeveloper from './logos/google-developer.png';
import LogoFirebase from './logos/firebase.png';
import LogoWongnai from './logos/wongnai.png';
import LogoSkootar from './logos/skootar.png';
import LogoPapakuma from './logos/logo_papakuma_bgwhi.png'; 
import './Sponsors.css';

const SponsorsContent = () =>
(
    <div className="container sponsor-container">
      <div className="content sponsor-header">
        <h2 className="title is-3">Sponsors</h2>
        <p>This hackathon couldn't happen without these following sponsors.</p>
      </div>
      <div className="content has-text-centered">
        <div className="main-sponsors">
          <a href="http://developer.google.com" target="_blank"><img src={LogoGoogleDeveloper} alt="logo" /></a>
          <a href="https://firebase.google.com/" target="_blank"><img src={LogoFirebase} alt="logo" /></a>
        </div>
        <div className="platinum-sponsors">
          <a href="http://www.sellsuki.co.th/" target="_blank"><img src={LogoSellsuki} alt="logo" /></a>
          <img src={LogoSprint3r} alt="logo" />
          <a href="http://sanook.com" target="_blank"><img src={LogoTencent} alt="logo" /></a>
          <a href="http://www.donuts-bkk.com" target="_blank"><img src={LogoDonut} alt="logo" /></a>
        </div>
        <div className="gold-sponsors">
          <a href="http://www.3dsinteractive.com" target="_blank"><img src={Logo3DS} alt="logo" /></a>
          <a href="http://nextzy.me" target="_blank"><img src={LogoNextzy} alt="logo" /></a>
          <a href="http://pantip.com" target="_blank"><img src={LogoPantip} alt="logo" /></a>
          <a href="http://thothzocial.com" target="_blank"><img src={LogoThoth} alt="logo" /></a>
          <a href="http://cleverse.com" target="_blank"><img src={LogoCleverse} style={{maxWidth: '130px'}} alt="logo" /></a>
          <a href="http://wongnai.com" target="_blank"><img src={LogoWongnai} style={{maxWidth: '130px'}} alt="logo" /></a>
          <a href="https://www.skootar.com" target="_blank"><img src={LogoSkootar} style={{maxWidth: '130px'}} alt="logo" /></a>
          <a href="http://www.papakuma.com" target="_blank"><img src={LogoPapakuma} style={{maxWidth: '130px'}} alt="logo" /></a>
        </div>
      </div>
    </div>
);

export default SponsorsContent;
