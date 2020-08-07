import React from 'react';
import './style.css'

const Section5: React.FC = () => {
  return (
    <>
      <div id="content-text-container">
        <div id="text-top-content">
          <p id="title-content-text">No ads. No problems.</p>
          <p id="desc-content-text">Your privacy stays yours. We don’t sell your data or target you with ads. Ever.</p>
        </div>
      </div>
      <div id="content-text-container-info">
        <div id="btn-info-container">
          <button id="btn-get-started">Get Started</button>
        </div>
        <div id="text-info-container">
          <p id="title-text-info">We do things differently.</p>
          <p id="desc-text-info">Medium is not like any other platform on the internet. Our sole purpose is to help you find compelling ideas,
          knowledge, and perspectives. We don’t serve ads—we serve you, the curious reader who loves to learn new things.
          Medium is home to thousands of independent voices, and we combine humans and technology to find the best reading for
                you—and filter out the rest.</p>
        </div>
      </div>

      <hr className="linha"></hr>
    </>
  );
}

export default Section5;