import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import images from "./images";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <div className="details">
          <h1>
            THE TRIP <br /> OF YOUR DREAMS
          </h1>
          <p>
            Explore The Most Beautiful Places on Earth With{" "}
            <span>DreamFLY</span>
          </p>
          <div className="buttons">
            <button>
              <a href="#plan-your-trip">Plan Your Trip</a>
            </button>
            <button>
              <a href="#premium">All Inclusive</a>
            </button>
          </div>
        </div>
      </div>
      <div className="featured-destinations" id="plan-your-trip">
        <h1 className="title">7 Most Visited Destinations</h1>
        <div className="row">
          <div className="column">
            <div>
              <img src={images[4]} alt="" />
              <p>Maldives</p>
            </div>
            <div>
              <p>Dubai</p>
              <img src={images[7]} alt="" />
            </div>
            <div>
              <p>Ibiza</p>
              <img src={images[11]} alt="" />
            </div>
          </div>
          <div className="column">
            <div>
              <p>Saranda</p>
              <img src={images[8]} alt="" />
            </div>
            <div>
              <p>Los Angelos</p>
              <img src={images[10]} alt="" />
            </div>
          </div>
          <div className="column">
            <div>
              <p>Bahamas</p>
              <img src={images[6]} alt="" />
            </div>
            <div>
              <p>Tahiti</p>
              <img src={images[9]} alt="" />
            </div>
            <div>
              <p>Fiji</p>
              <img src={images[5]} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="our-services">
        <h1 className="title">Our Services</h1>
        <div className="row">
          <div className="column">
            <div>
              <img src={images[12]} alt="" />
              <p>Family Vacations</p>
            </div>
            <div>
              <img src={images[13]} alt="" />
              <p>Group Getaways</p>
            </div>
          </div>
          <div className="column">
            <div>
              <img src={images[14]} alt="" />
              <p>Luxury Honeymoons</p>
            </div>
            <div>
              <img src={images[15]} alt="" />
              <p>Destionation Weddings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="premium-services" id="premium">
        <h1 className="title">Premium Services</h1>
        <div className="items">
          <div>
            <img src={images[17]} alt="" />
            <p>All Inclusive Resort in Ibiza!</p>
          </div>
          <div>
            <img src={images[16]} alt="" />
            <p>All Inclusive Vacation in Maldives!</p>
          </div>
          <div>
            <img src={images[18]} alt="" />
            <p>Luxuries Yacht</p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
    //taveler favorites
  );
};
export default Home;
