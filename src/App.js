import React, { Component } from "react";
import "./App.css";

import aliasStore from "./store/AliasStore";
import AliasForm from "./AliasForm";
import AliasList from "./AliasList";

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
