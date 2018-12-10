import React, { Component } from "react";
import "./App.css";

import store from "./store/AliasStore";
import AliasRow from "./AliasRow";

import { observer } from "mobx-react";

class AliasList extends Component {
  render() {
    let aliasRow = store.aliases.map(person => (
      <AliasRow key={person.alias} person={person} />
    ));
    console.log(store.aliases);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ALIAS</th>
              <th>DESCRPTION</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>{aliasRow}</tbody>
        </table>
      </div>
    );
  }
}

export default observer(AliasList);
