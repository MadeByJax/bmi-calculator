import React from "react";
import { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [isMetric, setIsMetric] = useState(true);

  const [weight, setWeight] = useState({ kg: "", lbs: "" });
  const [height, setHeight] = useState({ cm: "", ft: "", in: "" });
  const [healthyWeightRange, setHealthyWeightRange] = useState(["--", "--"]);
  const [bmiResult, setBmiResult] = useState("--");

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

  // Tells the application whether the measurement is in Metric or Imperial
  const handleRadioButton = (value) => {
    setIsMetric(value);
    setHeight({ cm: "", ft: "", in: "" });
    setWeight({ kg: "", lbs: "" });
  };

  // Calculates BMI depending if the user selected metric or imperial
  const calculateBMI = () => {
    let bmi;
    if (isMetric) {
      const weightKg = parseFloat(weight.kg);
      const heightM = parseFloat(height.cm) / 100;
      if (isNaN(weightKg) || isNaN(heightM)) {
        setBmiResult("--");
        return;
      }
      bmi = weightKg / (heightM * heightM);
    } else {
      const weightLbs = parseFloat(weight.lbs);
      const heightIn = parseFloat(height.ft) * 12 + parseFloat(height.in);
      if (isNaN(weightLbs) || isNaN(heightIn)) {
        setBmiResult("--");
        return;
      }
      bmi = (weightLbs / (heightIn * heightIn)) * 703;
    }
    setBmiResult(bmi.toFixed(1));
  };

  const calculateHealthyWeightRange = () => {
    let lowerWeight, upperWeight;
    if (isMetric) {
      const heightM = parseFloat(height.cm) / 100;
      if (isNaN(heightM)) {
        return ["--", "--"];
      }
      lowerWeight = (18.5 * heightM * heightM).toFixed(1);
      upperWeight = (24.9 * heightM * heightM).toFixed(1);
    } else {
      const heightIn = parseFloat(height.ft) * 12 + parseFloat(height.in);
      if (isNaN(heightIn)) {
        return ["--", "--"];
      }
      lowerWeight = ((18.5 * heightIn * heightIn) / 703).toFixed(1);
      upperWeight = ((24.9 * heightIn * heightIn) / 703).toFixed(1);
    }
    return [lowerWeight, upperWeight];
  };

  // Calculates BMI once the user enters a value into the inputs
  useEffect(() => {
    calculateBMI();
  }, [weight, height, bmiResult]);

  useEffect(() => {
    setHealthyWeightRange(calculateHealthyWeightRange());
  }, [height, isMetric]);

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
    range for your height is between`}{" "}
                <strong>{`${healthyWeightRange[0]} and ${
                  healthyWeightRange[1]
                } ${isMetric ? "kg" : "lbs"}`}</strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
