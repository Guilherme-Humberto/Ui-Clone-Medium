import React from 'react';
import './style.css'

const Section4: React.FC = () => {
  return (
    <>
      <div id="points-items-container">
        <div id="pont-item">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="icon-from-points">
            <circle cx="14" cy="14" r="14"></circle>
            <path d="M8 14.5l4.73 3.66 7.76-9.87" stroke="#fff" stroke-width="3"></path>
          </svg>
          <p>World-class publications.</p>
        </div>
        <div id="pont-item">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="icon-from-points">
            <circle cx="14" cy="14" r="14"></circle>
            <path d="M8 14.5l4.73 3.66 7.76-9.87" stroke="#fff" stroke-width="3"></path>
          </svg>
          <p>Undiscovered voices.</p>
        </div>
        <div id="pont-item">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="icon-from-points">
            <circle cx="14" cy="14" r="14"></circle>
            <path d="M8 14.5l4.73 3.66 7.76-9.87" stroke="#fff" stroke-width="3"></path>
          </svg>
          <p>Topics you love.</p>
        </div>
        <div id="pont-item">
          <p id="text-point">All on Medium, all for you.</p>
        </div>
      </div>
    </>
  );
}

export default Section4;