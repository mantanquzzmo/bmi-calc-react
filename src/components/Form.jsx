import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <label htmlFor="weight"></label>
      <input
        type="number"
        required
        placeholder={props.method === 'metric' ? "Weight in kgs" : "Weight in lbs"}
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height"></label>
      <input
        type="number"
        required
        placeholder={props.method === 'metric' ? "Height in cm" : "Height in inches"}
        value={props.height}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <br/>
      <select
        id="method"
        method={props.method}
        onChange={props.changeMethod}
        class="select-css"
      >
        <option value="metric">Metric System</option>
        <option value="imperial">Imperial System</option>
      </select>
      <br/>
      <button id="calculate" class="button black">Calculate BMI</button>
    </form>
  );
};

export default Form;
