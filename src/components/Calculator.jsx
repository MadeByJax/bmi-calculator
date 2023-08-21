import React from "react";
import { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [isMetric, setIsMetric] = useState(true);

  const [weight, setWeight] = useState({ kg: "", lbs: "" });
  const [height, setHeight] = useState({ cm: "", ft: "", in: "" });

  // Function to determine whether the user is a healthy weight
  const getWeightStatus = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "a Healthy Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const [bmiResult, setBmiResult] = useState("--");

  // Tells the application whether the measurement is in Metric or Imperial
  const handleRadioButton = (value) => {
    setIsMetric(value);
    setHeight({ cm: "", ft: "", in: "" });
    setWeight({ kg: "", lbs: "" });
  };

  // Calculates BMI depending if the user selected metric or imperial
  const calculateBMI = () => {
    if (isMetric) {
      const weightKg = parseFloat(weight.kg);
      const heightCm = parseFloat(height.cm);
      // Validation if user enters invalid input
      if (isNaN(weightKg) || isNaN(heightCm)) {
        setBmiResult("--");
      } else {
        let bmi = weightKg / ((heightCm / 100) * (heightCm / 100));
        setBmiResult(bmi.toFixed(1));
      }
    } else {
      const weightLbs = parseFloat(weight.lbs);
      const heightFt = parseFloat(height.ft);
      const heightIn = parseFloat(height.in);
      const heightInCalc = heightFt * 12 + heightIn;
      // Validation if user enters invalid input
      if (isNaN(heightInCalc) || isNaN(weightLbs)) {
        setBmiResult("--");
      } else {
        let bmi = (weightLbs / (heightInCalc * heightInCalc)) * 703;
        setBmiResult(bmi.toFixed(1));
      }
    }
  };

  // Calculates BMI once the user enters a value into the inputs
  useEffect(() => {
    calculateBMI();
  }, [weight, height, bmiResult]);

  return (
    <div className="calculator">
      <div className="calculator--container">
        <h3>Enter your details below</h3>
        <div className="units">
          <div>
            <input
              checked={isMetric === true}
              onChange={() => handleRadioButton(true)}
              type="radio"
              id="metric"
              name="units"
            />
            <label htmlFor="metric">Metric</label>
          </div>
          <div>
            <input
              checked={isMetric === false}
              onChange={() => handleRadioButton(false)}
              type="radio"
              id="imperial"
              name="units"
            />
            <label htmlFor="imperial">Imperial</label>
          </div>
        </div>
        {isMetric ? (
          <div className="inputs">
            <label htmlFor="">Height</label>
            <div className="user--inputs">
              <input
                onChange={(e) => setHeight({ ...height, cm: e.target.value })}
                placeholder="cm"
                type="number"
                value={height.cm}
              />
            </div>
            <label htmlFor="">Weight</label>
            <div className="user--inputs">
              <input
                onChange={(e) => setWeight({ ...weight, kg: e.target.value })}
                placeholder="kg"
                type="number"
                value={weight.kg}
              />
            </div>
          </div>
        ) : (
          <div className="inputs">
            <label htmlFor="">Height</label>
            <div className="user--inputs">
              <input
                onChange={(e) => setHeight({ ...height, ft: e.target.value })}
                placeholder="ft"
                type="number"
                value={height.ft}
              />
              <input
                onChange={(e) => setHeight({ ...height, in: e.target.value })}
                placeholder="in"
                type="number"
                value={height.in}
              />
            </div>
            <label htmlFor="">Weight</label>
            <div className="user--inputs">
              <input
                onChange={(e) => setWeight({ ...weight, lbs: e.target.value })}
                placeholder="lbs"
                type="text"
                value={weight.lbs}
              />
            </div>
          </div>
        )}

        <div className="result">
          <div className="left--side">
            <p>Your BMI is...</p>
            <h4>{bmiResult}</h4>
          </div>
          <div className="right--side">
            {bmiResult === "--" ? (
              <p>Please enter your Height and Weight</p>
            ) : (
              <p>
                {`Your BMI suggests you're`}{" "}
                <strong>{getWeightStatus(bmiResult)}</strong>
                {`. A healthy weight
              range is between`}{" "}
                <strong>{`18.5 and 24.9`}</strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
