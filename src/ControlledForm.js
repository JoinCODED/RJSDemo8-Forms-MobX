import React, { Component } from "react";
import "./App.css";

class ControlledForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <p className="App-intro">Tell us about yourself:</p>
      </div>
    );
  }
}

export default ControlledForm;
