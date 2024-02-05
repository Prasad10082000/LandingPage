import React from "react";
import Landscp from "../../assets/Landscape.svg";
import L1 from "../../assets/land1.svg";
import L2 from "../../assets/land2.svg";
import "./Landscape.css";

const Landscape = () => {
  return (
    <div className="Landmain">
      <h2>Navigating Real Estate's Digital Landscape</h2>
      <p>Insights for Real Estate Marketing Advantage</p>
      <div className="Landsubmain">
        <div className="Landcards">
          <div className="card1">
            <div className="cardimg">
              <img src={L1} alt="Land1" />
            </div>
            <div className="info">
              <p className="head1">Market Trends Analysis</p>
              <p className="head2">Predictive insights to guide real estate strategies.</p>
            </div>
          </div>
          <div className="card1">
            <div className="cardimg">
              <img src={L2} alt="Land1" />
            </div>
            <div className="info">
              <p className="head1">Targeted Buyer Persona</p>
              <p className="head2">Understand and connect with your ideal property buyers..</p>
            </div>
          </div>
          <div className="card1">
            <div className="cardimg">
              <img src={L1} alt="Land1" />
            </div>
            <div className="info">
              <p className="head1">Market Trends Analysis</p>
              <p className="head2">Predictive insights to guide real estate strategies.</p>
            </div>
          </div>
          <div className="card1">
            <div className="cardimg">
              <img src={L2} alt="Land1" />
            </div>
            <div className="info">
              <p className="head1">Targeted Buyer Persona</p>
              <p className="head2">Understand and connect with your ideal property buyers..</p>
            </div>
          </div>
        </div>

        <div className="Landimg">
          <img src={Landscp} alt="Landscape" />
        </div>
      </div>
    </div>
  );
};

export default Landscape;
