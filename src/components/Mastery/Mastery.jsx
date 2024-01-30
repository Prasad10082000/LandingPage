import React from "react";
import "./Mastery.css";
import Masteryimg from "../../assets/Mastery.svg";

const Mastery = () => {
  return (
    <div className="Masterdiv">
      <h3>Real Estate-Focused Digital Mastery</h3>

      <div className="SubMaster">
        <div className="SubMaster1">
          <img className="imgmaster" src={Masteryimg} alt="Masteryimg" />
        </div>
        <div className="SubMaster2">
          <p className="titlesub1">
            Unlock the Potential of Digital Real Estate Excellence
          </p>
          <p className="content1">
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </p>
          <button className="b1">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Mastery;
