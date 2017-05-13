import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import SponsorsContent from "../Sponsors/Content";

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
          <h2 className="title is-2">PWA Online hackathon คืออะไร</h2>
          <p>
            PWA Online Hackathon เป็นการแข่งขัน Hackathon ที่ไม่ต้องมาเจอหน้ากันจริงๆ ต่างคนต่างทำอยู่บ้าน สร้าง Web Application เจ๋ง ๆ แล้วส่งมาแข่งกันผ่าน online Web Application ของใครเจ๋ง ก็รับรางวัลมากมายจากเราไปได้เลย
          </p>
          <h2 className="title is-2">กฏเหล็ก</h2>
          <p>
            กฏเหล็กของเราคือนักพัฒนาต้องสร้าง Web application ที่ไม่มี Backend และสามารถรันบน Static server ได้ สามารถอ่านกฎเพิ่มเติมได้<Link to="/rules">ที่่นี่</Link>
          </p>
          <h2 className="title is-2">ของรางวัล</h2>
          <p>
            ของรางวัลเยอะจัด พิมพ์ตรงนี้ไม่หมด กดไปดูที่<Link to="/prizes">หน้ารางวัล</Link>ได้เลย
          </p>
          <h2 className="title is-2">สมัครเข้าร่วม Hackathon</h2>
          <p>Coming soon</p>
        </div>
      </div>
    </section>
    <SponsorsContent />
  </div>
);

export default Home;
