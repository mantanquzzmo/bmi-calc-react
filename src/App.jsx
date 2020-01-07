import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";
import { calculateBmiMet } from "./helpers/bmiHelper";
import { calculateBmiImp } from "./helpers/bmiHelper";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
    method: "metric"
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    if (this.state.method === 'metric') {
    const [bmiValue, bmiMessage] = calculateBmiMet(
      this.state.weight,
      this.state.height
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  } else {
    const [bmiValue, bmiMessage] = calculateBmiImp(
      this.state.weight,
      this.state.height
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  }
}

  changeMethod = e => {
    this.setState({
      method: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Form
          weight={this.state.weight}
          height={this.state.height}
          method={this.state.method}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          changeMethod={this.changeMethod}
        />
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
      </div>
    );
  }
}

export default App;
