import React from "react";
import "./footer.css";
import { BsInstagram, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";
import { RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="columns">
        <div className="column col1">
          <h3>Find Us</h3>
          <p>
            <BsInstagram className="icon" /> Instagram
          </p>
          <p>
            <BsFacebook className="icon" /> Facebook
          </p>
          <p>
            <BsTwitter className="icon" /> Twitter
          </p>
          <p>
            <BsGithub className="icon" /> GitHub
          </p>
          <p>
            <RiYoutubeFill className="icon" /> YouTube
          </p>
        </div>
        <div className="column">
          <h3>Vacation Types</h3>
          <p>Family Vacation</p>
          <p>All Inclusive</p>
          <p>Honeymoon</p>
          <p>Group Vacation</p>
          <p>Cruises</p>
          <p>Beach</p>
        </div>
        <div className="column">
          <h3>All Inclusive</h3>
          <p>All Inclusive Resorts</p>
          <p>All Inclusive Vacation</p>
          <p>All Inclusive Crusises</p>
        </div>
        <div className="column">
          <h3>Destinations</h3>
          <p>Ibiza</p>
          <p>USA</p>
          <p>Maldives</p>
          <p>Dubai</p>
          <p>Samoa</p>
          <p>Bora Bora</p>
          <p>Fiji</p>
          <p>Etc...</p>
        </div>
      </div>

      <div className="copyright">
        <p>© DreamFLY 2022, All rights reserved.</p>
        <span>
          <p>Privatcy Notice | </p>
          <p> Terms of use | </p>
          <p> Booking Terms & Conditions | </p>
          <p>Do not sell my personal information</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
