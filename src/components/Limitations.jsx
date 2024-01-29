import React from "react";
import "./Limitations.css";
import Age from "/assets/images/icon-age.svg";
import Gender from "/assets/images/icon-gender.svg";
import Muscle from "/assets/images/icon-muscle.svg";
import Pregnancy from "/assets/images/icon-pregnancy.svg";
import Race from "/assets/images/icon-race.svg";

const Limitations = () => {
  const content = [
    {
      image: Gender,
      title: "Gender",
      body: `The development and body fat composition of girls and boys vary with age. Consequently,
    a child's age and gender are considered when evaluating their BMI.`,
    },
    {
      image: Age,
      title: "Age",
      body: ` In aging individuals, increased body fat and muscle loss may cause BMI to underestimate 
        body fat content.`,
    },
    {
      image: Muscle,
      title: "Muscle",
      body: `BMI may misclassify muscular individuals as overweight or obese, as it doesn't 
        differentiate muscle from fat.`,
    },
    {
      image: Pregnancy,
      title: "Pregnancy",
      body: ` Expectant mothers experience weight gain due to their growing baby. Maintaining a 
        healthy pre-pregnancy BMI is advisable to minimise health risks for both mother 
        and child.`,
    },
    {
      image: Race,
      title: "Race",
      body: `  Certain health concerns may affect individuals of some Black and Asian origins at 
        lower BMIs than others. To learn more, it is advised to discuss this with your 
        GP or practice nurse.`,
    },
  ];

  return (
    <div className="limitations">
      <div className="card--section">
        <div className="limitations-desc">
          <h2 className="limitations--title">Limitations of BMI</h2>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        {content.map((item, i) => (
          <div className="card--container">
            <div className="top--card">
              <img src={item.image} alt="" />
              <h2 className="card--title">{item.title}</h2>
            </div>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Limitations;
