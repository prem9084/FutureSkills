import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="bg-dark text-light  footer">
        <div className="container footer-li p-3 d-flex justify-content-between">
          <div className="abstract">
            <ul>
              <li>
                <h4>Abstract</h4>
              </li>
              <li>Branches</li>
            </ul>
          </div>
          <div className="resource">
            <ul>
              <li>
                <h4>Resource</h4>
              </li>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="community">
            <ul>
              <li>
                <h4>Community</h4>
              </li>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Prodcast</li>
            </ul>
          </div>
          <div className="company">
            <ul>
              <li>
                <h4>Company</h4>
              </li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
              <br />
              <li>
                <h4>Contact Us</h4>
              </li>
              <li>info@abstract.com</li>
            </ul>
          </div>
        </div>
        <div className="copyright me-3">
          <img
            src="https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg"
            alt=""
            className="copyright-logo"
          />
          <p className="mt-3">
            &#169; Copyright 2024 <br />
            Abstract Studio Design, Inc <br />
            All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
