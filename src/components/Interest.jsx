import React from "react";

const Interest = ({ img, text }) => {
  return (
    <div className={`interest row`}>
      <div>{text}</div>
      <img src={img} alt="interest" />
    </div>
  );
};

export default Interest;
