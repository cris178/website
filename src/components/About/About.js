import React from "react";
import "./About.css";
import Description from "./Description/Description";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="container">
          <div className="row logo">
            <img
              src="https://i.imgur.com/MZEeDYU.png"
              width="200px"
              height="200px"
              alt="c-angle-logo"
            />
          </div>

          <Description />
        </div>
      </div>
    );
  }
}

export default About;
