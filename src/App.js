import React, { Component } from "react";
import "./App.css";

import ControlledForm from "./ControlledForm";
import AliasList from "./AliasList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ControlledForm />
        <AliasList />
      </div>
    );
  }
}

export default App;
