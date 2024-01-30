import React from "react";
import Coverimg from "../../assets/Cover.svg";
import "./Home.css"

const Home = () => {
  return (
    <div className="Maindiv">
        <div className="Submain">
      <h1>
        Elevate <span>Real Estate Success </span> with<br/> Osumare's Digital
        Expertise
      </h1>
      <p className="para1">
        Tailored Solutions for Thriving in the Digital Real Estate Landscape
      </p>
      <button className="getbtn">Get started</button>
      </div>
      <div>
        <img className="coverimg" src={Coverimg} alt="cover img" />
      </div>
    </div>
  );
};

export default Home;
