import React from "react";

const Footer = () => {
  return (
    <div className="foot">
      <div className="footer">
        <div>
          <h2>
            <a href="/">
              <span>T</span>Trafalgar
            </a>
          </h2>
          <p>
            Trafalgar provides progressive, and affordable <br /> healthcare,
            accessible on mobile and online <br /> for everyone
          </p>
          <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
        <div>
          <h3>Company</h3>
          <div className="links">
            <a href="/">About</a>
            <a href="/">Testimonials</a>
            <a href="/">Find a Doctor</a>
            <a href="/">Apps</a>
          </div>
        </div>
        <div>
          <h3>Region</h3>
          <div className="links">
            <a href="/">Indonesia</a>
            <a href="/">Singapore</a>
            <a href="/">Hongkong</a>
            <a href="/">Canada</a>
          </div>
        </div>
        <div>
          <h3>Help</h3>
          <div className="links">
            <a href="/">Help center</a>
            <a href="/">Contact support</a>
            <a href="/">Instructions</a>
            <a href="/">How it works</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
