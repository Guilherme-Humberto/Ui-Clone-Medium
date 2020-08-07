import React from 'react';
import './style.css'

const Section9: React.FC = () => {
  return (
      <>
        <div id="footer-page-container">
            <div id="links-container-footer">
                  <svg width="35" height="35" viewBox="5 5 35 35">
                      <path
                          d="M5 40V5h35v35H5zm8.56-12.63c0 .56-.03.69-.32 1.03L10.8 31.4v.4h6.97v-.4L15.3 28.4c-.29-.34-.34-.5-.34-1.03v-8.95l6.13 13.36h.71l5.26-13.36v10.64c0 .3 0 .35-.19.53l-1.85 1.8v.4h9.2v-.4l-1.83-1.8c-.18-.18-.2-.24-.2-.53V15.94c0-.3.02-.35.2-.53l1.82-1.8v-.4h-6.47l-4.62 11.55-5.2-11.54h-6.8v.4l2.15 2.63c.24.3.29.37.29.77v10.35z">
                      </path>
                  </svg>
                  <div id="links-texts-footer1">
                      <p>Get Started</p>
                      <p>Subscribe</p>
                      <p>Have an account?</p>
                      <p>Sign in</p>
                  </div>
                  <div id="links-texts-footer2">
                      <p>About Medium</p>
                      <p>Write</p>
                      <p>Gift</p>
                      <p>Help</p>
                      <p>Press Contacts</p>
                      <p>Careers</p>
                      <p>Legal</p>
                  </div>
                  <div id="links-texts-footer3">
                      <p>© 2020 A Medium Corporation</p>
                  </div>
            </div>
            <div id="stores-container-footer">
                  <p>Get the Medium app</p>
                    <img alt="A button that says 'Download on the App Store', and if clicked it will lead you to the iOS App store"
                        src="https://miro.medium.com/max/270/1*Crl55Tm6yDNMoucPo1tvDg.png" width="135" height="41">
                    </img>
                    <img alt="A button that says 'Get it on, Google Play', and if clicked it will lead you to the Google Play store"
                        src="https://miro.medium.com/max/270/1*W_RAPQ62h0em559zluJLdQ.png" width="135" height="41">
                    </img>
            </div>
        </div>
      </>
  );
}

export default Section9;