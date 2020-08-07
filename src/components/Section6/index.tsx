import React from 'react';
import './style.css'

const Section6: React.FC = () => {
  return (
      <>
      <div id="users-container">
        <div id="box-content">
          <p id="text">120 million curious readers and growing.</p>
          <div id="box-users-container">
              <svg width="62" className="icons-box-top" height="50" viewBox="0 0 62 50" fill="none">
                <path d="M61.8 0C45.63 4.36 35.4 20.33 35.4 34.65 35.4 44.19 41.33 50 49.3 50 56.68 50 62 44.2 62 37.14c0-6.85-4.5-12.04-10.44-12.87-1.63-.2-2.25-.83-2.25-2.28 0-8.3 4.91-17.22 12.69-21.58L61.8 0zM26.6 0C10.44 4.36 0 20.33 0 34.65 0 44.19 6.14 50 13.91 50c7.37 0 12.9-5.8 12.9-12.86 0-6.85-4.5-12.04-10.44-12.87-1.84-.2-2.25-.83-2.25-2.28 0-8.3 4.91-17.22 12.69-21.58L26.6 0z" fill="#03A87C">
                </path>
              </svg>
            <div id="box">
              <p id="text-box">Do yourself a favor and start browsing Medium for high quality articles on just about ANY topic. Get those mental gears turning!</p>
              <div id="user-info">
                <img src="https://avatars3.githubusercontent.com/u/55901431?s=460&u=e11d8ec66ccd8c3309877859b23eebeff37b5bbc&v=4" alt="icon-users" />
                <p>Guilherme Humberto</p>
              </div>
              <div id="circles">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Section6;