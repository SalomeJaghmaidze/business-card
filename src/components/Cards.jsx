import React from "react";
import image from "../images/aboutImage.jpg";
import git from "../images/gitHubIcon.png";
import linkedin from "../images/linkedinIcon.png";
import twitter from "../images/twitterIcon.png";
import "./Styles.css";

function Cards() {
  return (
    <div className="container">
      <div className="card">
        <div className="info">
          <img src={image} alt="" />
          <h1>Salome Jaghmaidze</h1>
          <p>Frontend developer</p>
          <button>Email</button>
        </div>

        <div className="content">
          <div className="about">
            <h2>About</h2>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="interests">
            <h2>Interests</h2>
            <p>Kalimba player. Reader. Tea lover. Nature fanatic.</p>
          </div>
        </div>

        <div className="footer">
          <img src={git} alt="" />
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
