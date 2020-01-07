import React from "react";

const Message = props => {
  return (
    <h3 id='bmi-message'>
      You are {props.bmiMessage} with a BMI of {props.bmiValue}
    </h3>
  );
};

export default Message;