import React from "react";
import "./YourResult.css";
import manEating from "../assets/images/image-man-eating.webp";

const YourResult = () => {
  return (
    <div className="yourresult">
      <div className="yourresult--container">
        <div className="image">
          <img src={manEating} alt="" />
        </div>
        <div className="bmi--results">
          <h3>What your BMI result means</h3>
          <p>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourResult;
