import React, { Component } from "react";
import "./App.css";

import ControlledForm from "./ControlledForm";
import AliasList from "./AliasList";

import store from "./store/AliasStore";

class App extends Component {
  componentDidMount() {
    store.fetchList();
  }

  render() {
    return (
      <div className="container">
        <p className="App-intro">Tell us about yourself:</p>
        <ControlledForm />
        <AliasList />
      </div>
    );
  }
}

export default App;
