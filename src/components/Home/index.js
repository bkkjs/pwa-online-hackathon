import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import SponsorsContent from "../Sponsors/Content";
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
            23 มิถุนายน 2560 20:00 น. - 25 มิถุนายน 2560 20:00 น.
          </h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="content">
          <h2 className="title is-4">PWA Online hackathon คืออะไร</h2>
          <p>
            PWA Online Hackathon เป็นการแข่งขัน Hackathon <strong>ที่ไม่ต้องมาเจอหน้ากันจริงๆ ต่างคนต่างทำอยู่บ้าน</strong> สร้าง Web Application เจ๋ง ๆ แล้วส่งมาแข่งกันผ่าน online Web Application ของใครเจ๋ง ก็รับรางวัลมากมายจากเราไปได้เลย
          </p>
          <div className="columns">
            <div className="column">
              <h2 className="title is-5">จะแข่งขันมีกฏอะไรบ้าง</h2><br/>
              กฏเหล็กของเราคือนักพัฒนาต้องสร้าง Web application ที่ <strong>"ไม่มี Backend และสามารถรันบน Static server ได้"</strong> สามารถอ่านกฎเพิ่มเติมได้ ส่วนกฏที่เหลืออ่านได้<Link to="/rules">ที่นี่</Link>
            </div>
            <div className="column">
              <h2 className="title is-5">มีของของรางวัลอะไรบ้าง</h2><br/>
              ของรางวัลเยอะจัด มีทั้ง Google Pixel, Google Chrome book, Google chrome cast, รางวัลจาก Sponsor อย่าง Credit JOOX ฟรี หรือ เงินสดจาก Sellsuki ก็มา บอกตรงๆว่าพิมพ์ตรงนี้ไม่หมด กดไปดูที่<Link to="/prizes">หน้ารางวัล</Link>ได้เลย
            </div>
          </div>
          <p className="register-button"><a className="button is-warning is-focused is-large">เปิดรับสมัคร 1 มิถุนายน 2560</a></p>
        </div>
      </div>
    </section>
    <SponsorsContent />
  </div>
);

export default Home;
