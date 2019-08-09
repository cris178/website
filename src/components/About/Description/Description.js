import React from "react";
import "./Description.css";
import feather from "./SVG/feather.svg";
import layout from "./SVG/layout.svg";
import coffee from "./SVG/coffee.svg";

class Description extends React.Component {
  render() {
    return (
      <div className="Description">
        <div className="row">
          <h3 className="number">01</h3>
          {/*<h1 className="sectionTittle">About</h1>*/}
        </div>

        <div className="row">
          <div className="col motto">
            <h2 className="one">Writing</h2>
            <h2 className="spaceFix two">Designing</h2>
            <h2 className="spaceFix three">Building</h2>
          </div>

          <div className="col aboutMe">
            <p>
              Hello my name is Cristain Reyes. I am a Computer Science student
              at the University of California Riverside. I enjoy creating art
              digitially.
            </p>
          </div>
        </div>
        {/*End of row*/}

        <div className="categories">
          <h1>Cristian the...</h1>
          <div className="row cats">
            <div className="col-lg-4 right one">
              <img src={feather} alt="Writer" width="50px" height="50px" />
              <h2>Writer</h2>
            </div>
            <div className="col-lg-4 mid two">
              <img src={layout} alt="Designer" width="50" height="50" />
              <h2>Designer</h2>
            </div>
            <div className="col-lg-4 left three">
              <img src={coffee} alt="Designer" width="50" height="50" />
              <h2>Developer</h2>
            </div>
          </div>
        </div>
        {/*End of the Three Categories */}
      </div>
    );
  }
}

export default Description;
