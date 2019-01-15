import React from 'react';
import "./Footer.css";


function Footer(props) {
  return (
    <footer id="footerPage" className="page-footer">
      <div className="container">
        <div className="row">
          <h5 className="center white-text footer-update">{props.text}</h5>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center">
          © 2019
        </div>
      </div>
    </footer>
  )
}




export default Footer;