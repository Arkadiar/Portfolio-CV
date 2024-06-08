import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} Mircea Rosca. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
