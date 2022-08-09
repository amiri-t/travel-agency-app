import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="logo">
          <h3>
            Dream<span>FLY</span>
          </h3>
        </div>
      </div>
      <div className="right">
        <form>
          <input type="text" placeholder="Enter Your Name Here..." />
          <input type="email" placeholder="Enter Your Email Here..." />
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter Your Message Here..."
          ></textarea>
          <div className="button">
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
