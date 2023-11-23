import React from "react";
import "../tailwind.css";
import "../style/Footer.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    //   < !--Site footer-- >
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">

            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="/">C</a>
              </li>
              <li>
                <a href="/">
                  UI Design
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Android</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Templates</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Contribute</a>
              </li>
              <li>
                <a href="/">Blogs</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by
              <a href="/">GKR</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <SocialIcon
                className="github"
                url="https://github.com/GauravKesh"
              />
              <SocialIcon
                className="linkedin"
                url="https://linkedin.com/in/couetilc"
              />
              <SocialIcon
                className="facebook"
                url="https://facebook.com/in/couetilc"
              />
              <SocialIcon
                className="discord"
                url="https://discord.com/in/couetilc"
              />
              <SocialIcon
                className="twitter"
                url="https://twitter.com/in/couetilc"
              />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}