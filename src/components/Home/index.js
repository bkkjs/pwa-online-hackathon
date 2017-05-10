import React from 'react';
import './Home.css';

const Home = () =>
(
  <div>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Welcome to PWA Online Hackathon
          </h1>
          <h2 className="subtitle">
            The first online hackathon in Thailand
          </h2>
        </div>
      </div>
    </section>
    <div className="container">
<h1 className="title">PWA Online hackathon คืออะไร</h1>
Online Hackathon คือ การแข่งขัน Hackathon ที่ไม่ต้องมาเจอหน้ากันจริงๆ ต่างคนต่างทำอยู่บ้าน สร้าง Web Application เจ๋งๆแล้วส่งมาแข่งกันผ่าน online Web Application ของใครเจ๋งสุด ก็รับรางวัล มากมายจากเราไปได้เลย
    </div>
    <div className="container">
      <h1 className="title">กฏเหล็ก</h1>
      กฏเหล็กของเราคือ Developer ต้อง Create Web application ที่ไม่มี Backend และรันบน Static server ได้
    </div>
    <div className="container">
      <h1 className="title">รางวัล</h1>
      รางวัลเยอะจัดพิมพ์ตรงนี้ไม่หมด กดไปดูหน้ารางวัลเลย
    </div>
    <div className="container">
      สมัครเลย
    </div>
  </div>
);

export default Home;
