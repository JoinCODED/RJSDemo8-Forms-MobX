import React, { Component } from "react";
import "./App.css";

import store from "./store/AliasStore";
import AliasRow from "./AliasRow";

class AliasList extends Component {
  render() {
    let aliasRow = store.data.map(person => (
      <AliasRow key={person.alias} person={person} />
    ));
    return (
      <div>
        <table class="table">
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

export default AliasList;
