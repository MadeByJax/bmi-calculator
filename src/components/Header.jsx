import React from "react";
import "./Header.css";
import logo from "/assets/images/logo.svg";
import Calculator from "./Calculator";

const Header = () => {
  return (
    <div className="header">
      <div className="header-img-wrapper">
        <img src={logo} alt="" />
      </div>
      <div className="header--container">
        <div className="title">
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <Calculator />
      </div>
    </div>
  );
};

export default Header;
