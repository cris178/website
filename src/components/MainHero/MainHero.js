import React from "react";
import "./MainHero.css";

class MainHero extends React.Component {
  render() {
    return (
      <div className="MainHero">
        <div className="container">
          <div className="name">
            <h1 className="tittle">Cristian</h1>
            <h1 className="tittleUnder">Reyes</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHero;
