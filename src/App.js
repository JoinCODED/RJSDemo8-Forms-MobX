import React, { Component } from "react";
import "./App.css";

import AliasForm from "./AliasForm";
import AliasList from "./AliasList";

import aliasStore from "./store/AliasStore";

class App extends Component {
  componentDidMount() {
    aliasStore.fetchList();
  }
  render() {
    return (
      <div className="container">
        <AliasForm />
        <AliasList />
      </div>
    );
  }
}

export default App;
