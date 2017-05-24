import React from 'react';
import './Rules.css';
const Rules = () =>
(
  <div>
    <section className="hero is-primary hero-rules">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            &lt;Rules & FAQ /&gt;
          </h1>
          <h2 className="subtitle is-4">
            กฎ กติกา และคำถามที่พบบ่อย
          </h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="content">
          <h2 className="title is-4">กติกา</h2><br/>
          <ol>
            <li>ทีมที่เข้าแข่งขันต้องมีสมาชิกตั้งแต่ 2 - 5 คน</li>
            <li>เรามีเวลาให้ 48 ชั่วโมงสำหรับการสร้าง Web Application ห้ามสร้างก่อนเป็นอันขาด</li>
            <li>ทุกทีม ต้อง push code ทั้งหมด ขึ้น GitHub อย่างสม่ำเสมอ ในช่วงเวลา 48 ชั่วโมง</li>
            <li>งานของทุกทีมต้อง Host อยู่บน Firebase hosting เท่านั้น</li>
            <li>เรามีกฏนิดหน่อยสำหรับ Web Application และทางกรรมการขออนุญาตตัดสิทธิสำหรับ Application ที่ทำผิดกฏ</li>
            <li>ทางทีมผู้จัดงานจะส่งรายละเอียด เรื่องวิธีการส่ง Web application หลังจากที่ได้สมัครแล้ว</li>
          </ol>
          <hr/>
          <h2 className="title is-4">กฎสำหรับ Web Application</h2><br/>
          เผื่อความเท่าเทียม เรามีกฏเล็กๆน้อยๆของ Web Application ที่จะทำมาแข่งขันใน PWA Online Hackathon ดังนี้
          <ul>
            <li>เราไม่อนุญาตให้ ทำ Backend หรือ API เองเป็นอันขาด</li>
            <li>
              แต่มันจะไม่สนุกเลยถ้าใช้ API ไม่ได้เลย เราจึงยอมให้ใช้ API สำหรับบาง Service ที่เป็น Public ตามนี้
              <ul>
                <li>Facebook API</li>
                <li>Instagram API</li>
                <li>Google API</li>
                <li>Twitter API</li>
                <li>GitHub API</li>
              </ul>
            </li>
            <li>Frontend Library ต่าง ๆ ที่เปิดเป็น public สามารถใช้งานได้ทั้งหมด</li>
            <li>Web Application จะต้องมี Web App manifest (สามารถ Add to home screen ได้สมบูรณ์) และ Service worker ติดตั้งอยู่</li>
            <li>Web Application จะต้องใช้งานได้บางส่วนหากไม่ได้เชื่อมต่อ Internet</li>
          </ul>
          <hr/>
          <h2 className="title is-4">กฎของ Firebase</h2><br/>
          งานนี้เรามี Sponsor เป็น Firebase เพราะฉะนั้น เราอณุญาติให้ ทุกคนสามารถใช้ Service ของ Firebase ได้ แต่สำหรับ Cloud function for Firebase สามารถใช้ได้ตามนี้เท่านั้น
          <ul>
            <li>แก้ไขข้อมูลเดิมใน Firebase Real-time Database </li>
            <li>ปรับแต่งรูปภาพที่อยู่ใน Firebase Storage</li>
            <li>ส่ง Notification ไปยัง Web Application</li>
            <li>ทำ Server Callback สำหรับ Login API</li>
            <li>ส่ง Email หา ผู้ใช้</li>
          </ul>
          <hr/>
          <h2 className="title is-4">การให้คะแนน</h2><br/>
          <strong>เราจะแบ่งการให้คะแนนตามหัวข้อดังนี้ เต็ม 100 คะแนน</strong>
          <ul>
            <li>ความสมบูรณ์ของ Web Application</li>
            <li>ความคิดสร้างสรรค์</li>
            <li>การเลือกใช้เทคโนโลยี</li>
          </ul>
          <strong>คะแนนพิเศษ</strong>
          <ul>
            <li>ทำคะแนนใน LightHouse ได้  เกิน 98 แต้ม</li>
            <li>มี Web notification</li>
            <li>ใช้ Geolocation API หรือ GetUserMedia API</li>
            <li>ทำ Web Application เป็น Web VR</li>
          </ul>
          <hr/>
          <h2 className="title is-4">คำถามที่พบบ่อย</h2><br/>
          <strong>Q: ถ้าจะใช้ API อย่างอื่นที่ไม่อยู่ในรายชื่อได้ไหม</strong>
          <p>A: หากทางนักพัฒนาต้องการจะใช้ API อื่นที่ไม่อยู่ในรายชื่อ ให้รบกวนส่งรายละเอียดของ API มาทางผู้จัดงาน ทางเราจะพิจารณาเพิ่มเข้าไปในรายชื่อเป็นกรณีไป โดย API ดังกล่าวต้องเป็น API ฟรี และสาธรณะ โดยในกรณีนี้ทีมอื่นสามารถใช้ API ดังกล่าวได้เช่นเดียวกัน</p>
          <strong>Q: ถ้าอยู่ต่างประเทศสามารถแข่งได้ไหม</strong>
          <p>A: ได้ แต่ถ้าหากทางนักพัฒนาได้รับของที่ระลึก หรือของรางวัล ทางเราจะจัดส่งให้ได้แค่ที่อยู่ในประเทศไทยเท่านั้น</p>
        </div>
      </div>
    </section>
  </div>
);

export default Rules;
