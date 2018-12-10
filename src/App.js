import React, { Component } from "react";
import "./App.css";

import store from "./store/AliasStore";
import ControlledForm from "./ControlledForm";
import AliasList from "./AliasList";

class App extends Component {
  componentDidMount() {
    store.fetchList();
  }
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
