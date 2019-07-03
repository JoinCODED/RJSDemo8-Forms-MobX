import React from "react";
import "./App.css";

import aliasStore from "./store/AliasStore";
import AliasRow from "./AliasRow";

import { observer } from "mobx-react";

function AliasList() {
  const aliasRow = aliasStore.aliases.map(person => (
    <AliasRow key={person.id} person={person} />
  ));
  console.log(aliasStore.aliases);
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

export default observer(AliasList);
