import React from "react";
import { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [isMetric, setIsMetric] = useState(true);

  const [weight, setWeight] = useState({ kg: "", lbs: "" });
  const [height, setHeight] = useState({ cm: "", ft: "", in: "" });

  const [bmiResult, setBmiResult] = useState("--");

  const handleRadioButton = (value) => {
    setIsMetric(value);
    console.log(isMetric);
  };

  const calculateBMI = () => {
    if (isMetric) {
      const weightKg = parseFloat(weight.kg);
      const heightCm = parseFloat(height.cm);
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
      if (isNaN(heightInCalc) || isNaN(weightLbs)) {
        setBmiResult("--");
        console.log(heightInCalc);
        console.log("heightFt:", heightFt);
        console.log("heightIn:", heightIn);
        console.log("heightInCalc:", heightInCalc);
      } else {
        let bmi = (weightLbs / (heightInCalc * heightInCalc)) * 703;
        setBmiResult(bmi.toFixed(1));
      }
    }
  };

  useEffect(() => {
    calculateBMI();
    console.log(bmiResult);
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
                type="text"
              />
            </div>
            <label htmlFor="">Weight</label>
            <div className="user--inputs">
              <input
                onChange={(e) => setWeight({ ...weight, kg: e.target.value })}
                placeholder="kg"
                type="text"
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
                type="text"
              />
              <input
                onChange={(e) => setHeight({ ...height, in: e.target.value })}
                placeholder="in"
                type="text"
              />
            </div>
            <label htmlFor="">Weight</label>
            <div className="user--inputs">
              <input
                onChange={(e) => setWeight({ ...weight, lbs: e.target.value })}
                placeholder="lbs"
                type="text"
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
            <p>
              Your BMI suggests you're a healthy weight. Your ideal weight is
              between 9st 6lbs - 12st 10lbs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
