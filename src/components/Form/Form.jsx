import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="Formdiv">
      <h3>Connect with Our Digital Marketing Experts</h3>
      <p>
        Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
        Elevate Your Online Presence Together
      </p>

      <div className="Mainform">
        <form>
          <div className="innerformdiv">
            <div className="subformdiv">
              <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="Enter your Number" />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your Email" />
              </div>
            </div>

            <div className="textareadiv">
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                placeholder="Enter Your Message"
                rows="10"
              ></textarea>
            </div>
          </div>
        </form>
      </div>

      <div>
        <p>&copy; 2024 Osumare. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Form;
