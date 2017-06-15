import React from 'react';
import './Resources.css';

const Resources = () =>
(
  <div>
    <section className="hero is-primary resource-hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            &lt;Resources /&gt;
          </h1>
          <h2 className="subtitle is-4">
            แหล่งความรู้ต่าง ๆ
          </h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1 className="title is-4">Video</h1><br/>
          <div className="columns">
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/9Jef9IluQw0" frameBorder="0" allowFullScreen></iframe></div>
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/ZqdNgn5Huqk" frameBorder="0" allowFullScreen></iframe></div>
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/C8KcW1Nj3Mw" frameBorder="0" allowFullScreen></iframe></div>
          </div>
          <div className="columns">
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/ARkPBm6AcNA" frameBorder="0" allowFullScreen></iframe></div>
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/kB4MgJ0AoOw" frameBorder="0" allowFullScreen></iframe></div>
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/cmGr0RszHc8" frameBorder="0" allowFullScreen></iframe></div>
         </div>
        <div className="columns">
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/YJwrBbze_Ec" frameBorder="0" allowFullScreen></iframe></div>
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/aCMbSyngXB4" frameBorder="0" allowFullScreen></iframe></div>
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/m-sCdS0sQO8" frameBorder="0" allowFullScreen></iframe></div>
        </div>
        <div className="columns">
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/U52dD0tegsA" frameBorder="0" allowFullScreen></iframe></div>
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/yQhFmPExcbs" frameBorder="0" allowFullScreen></iframe></div>
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/fyi7auD5MzU" frameBorder="0" allowFullScreen></iframe></div>
        </div>
        <div className="columns"> 
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/ZqdNgn5Huqk" frameBorder="0" allowFullScreen></iframe></div>
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/_ssDaecATCM" frameBorder="0" allowFullScreen></iframe></div>
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/NoRYn6gOtVo" frameBorder="0" allowFullScreen></iframe></div>  
        </div>
        <div className="columns">
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/Sftbg45nQcQ" frameBorder="0" allowFullScreen></iframe></div>  
              <div className="column is-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/IWgNn1kqrsA" frameBorder="0" allowFullScreen></iframe></div>  
              <div className="column is-4"><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fweb.developer.th%2Fvideos%2F1862240054102843%2F&show_text=0&width=560" width="100%" height="315" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></div>
        </div>
        </div>
      </div>
    </section>
  </div>
);

export default Resources;
