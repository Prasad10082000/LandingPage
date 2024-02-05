import React from "react";
import P1 from "../../assets/Prop1.svg";
import P2 from "../../assets/Prop2.svg";
import P3 from "../../assets/Prop3.svg";
import P4 from "../../assets/Prop4.svg";
import "./Property.css"; 

const Property = () => {
  return (
    <div>
      <h2>Driving Property Inquiries to Conversions</h2>

      <div className="property-container">
        <div className="property-card">
          <img src={P1} alt="" />
          <h4>Call-to-Action Optimization</h4>
          <p>
            Our carefully crafted CTAs guide potential buyers through the
            property journey, enhancing engagement and conversion rates.
          </p>
        </div>
        <div className="property-card">
          <img src={P2} alt="" />
          <h4>Call-to-Action Optimization</h4>
          <p>
            Our carefully crafted CTAs guide potential buyers through the
            property journey, enhancing engagement and conversion rates.
          </p>
        </div>
        <div className="property-card">
          <img src={P3} alt="" />
          <h4>Call-to-Action Optimization</h4>
          <p>
            Our carefully crafted CTAs guide potential buyers through the
            property journey, enhancing engagement and conversion rates.
          </p>
        </div>
        <div className="property-card">
          <img src={P4} alt="" />
          <h4>Call-to-Action Optimization</h4>
          <p>
            Our carefully crafted CTAs guide potential buyers through the
            property journey, enhancing engagement and conversion rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Property;
