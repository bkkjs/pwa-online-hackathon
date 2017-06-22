import React from 'react';
import './Detail.css';

const Detail = () =>
(
  <div>
    <section className="hero is-primary hero-rules">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            &lt;Hackathon Detail /&gt;
          </h1>
          <h2 className="subtitle is-4">
            รายละเอียดการแข่งขัน
          </h2>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="content detail-content">
        <h2>รายละเอียดการแข่งขัน</h2>
        <ul>
          <li>ขอให้ทุกท่านใช้ GitHub repo เดียวกับที่สมัครเข้ามาเท่านั้น หากมีการเปลี่ยนแปลง กรุณาแจ้งก่อนการแข่งขัน (ต้องเป็น public repository เท่านั้น)</li>
          <li>กรุณา Add member ของ Firebase Project ที่จะใช้ในการแข่งขัน โดยให้ add account <strong>pwaonlinehack@gmail.com</strong> เป็นสิทธิ Editor ตามวิธีการนี้ <a target="_blank" href="https://support.google.com/firebase/answer/7000272">https://support.google.com/firebase/answer/7000272</a></li>
          <li>Application จะต้องถูก Push ขึ้นบน GitHub และ Upload เข้า Firebase Hosting ในช่วงเวลาระหว่าง 20.00 ของวันที่ 23 มิถุนายน ถึง 20.00 ของวันที่ 25 มิถุนายน อย่างต่อเนื่อง</li>
          <li>หากทีมไหนพัฒนา Progressive Web App เสร็จเรียบร้อยแล้ว จะต้องทำการกรอกแบบฟอร์ม รายละเอียด Application จึงจะถือว่าเป็นการเสร็จสิ้นการแข่งขัน โดย URL ของแบบฟอร์ม จะแจ้งในหน้า Dashboard ภายใน 0:01 ของเสาร์ที่ 24 มิถุนายน</li>
          <li>ข้อกำหนดของ Application ที่เสร็จสมบูรณ์ต้องประกอบด้วย
            <ul>
              <li>
                มี code อยู่บน GitHub
              </li>
              <li>เว็บไซต์ถูกอัพโหลดขึ้นไปที่ Firebase Hosting</li>
              <li>เว็บไซต์สามารถเข้าใช้งานในขณะ Offline ได้</li>
              <li>มี manifest.json ติดตั้งอยู่</li>
              <li>กรอกฟอร์มรายละเอียดของ Application เรียบร้อย</li>
              <li>Application มี Feature ที่สมบูรณ์ใช้งานได้</li>
              <li>มีการ commit code อย่างสม่ำเสมอ</li>
              <li>ถ้าหากทีมไหนมีการ commit code ก่อนเวลา ทีมนั้นจะโดนตัดคะแนน 5 คะแนน</li>
              <li>ในกรณีที่ code ถูกอัพโหลด เข้ามาหลังเวลา 20.00 ของวันที่ 25 มิถุนายน ทางทีมงานจะทำการ rollback กลับไปยัง version ที่ถูก deploy เข้ามาก่อน 20.00</li>
            </ul>
          </li>
        </ul>
        <h2>เกณฑ์การให้คะแนน (100 คะแนนเต็ม)</h2>
        <ul>
          <li>ความสมบูรณ์ของ Application (40%)</li>
          <li>ความคิดสร้างสรรค์ (40%)</li>
          <li>การเลือกใช้ Technology (20%)</li>
        </ul>
        <p>และมีคะแนนพิเศษสำหรับผู้ที่ทำได้ในแต่ละหัวข้อ ดังนี้</p>
        <ul>
          <li>ทำคะแนนใน Lighthouse ได้ เกิน 98 แต้ม</li>
          <li>มี Web Notification</li>
          <li>มี Web Notification</li>
          <li>ใช้ Geolocation API หรือ getUserMedia API</li>
          <li>ทำ Web Application เป็น Web VR</li>
        </ul>
        <h2>สำหรับการนับ 200 คนแรก เราจะใช้กติกาดังนี้ครับ</h2>
        <ul>
          <li>การนับเวลา ดูจากเวลาล่าสุดของการกระทำ 3 ชนิดได้แก่
            <ul>
              <li>เวลาที่ Commit ล่าสุด</li>
              <li>เวลาที่ Deploy บน Firebase Hosting ล่าสุด</li>
              <li>เวลาที่กรอกแบบฟอร์มส่งผลงานล่าสุด</li>
            </ul>
          </li>
          <li>ทีมที่จะมีสิทธิรับรางวัล จะต้องผ่านข้อกำหนดของ Application ที่สมบูรณ์ และไม่มีการ commit code ก่อนเวลา</li>
          <li>การตัดสินของกรรมการถือเป็นที่สิ้นสุด</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Detail;
