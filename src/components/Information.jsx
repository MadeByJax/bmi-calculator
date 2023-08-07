import React from "react";
import "./Information.css";

import Eating from "../assets/images/icon-eating.svg";
import Exercise from "../assets/images/icon-exercise.svg";
import Sleep from "../assets/images/icon-sleep.svg";

const Information = () => {
  return (
    <div className="information">
      <ul className="list">
        <li>
          <img src={Eating} alt="" />
          <div>
            <h4>Healthy eating</h4>
            <p>
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </li>
        <li>
          <img src={Exercise} alt="" />
          <div>
            <h4>Regular exercise</h4>
            <p>
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </li>
        <li>
          <img src={Sleep} alt="" />
          <div>
            <h4>Adequate sleep</h4>
            <p>
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Information;
