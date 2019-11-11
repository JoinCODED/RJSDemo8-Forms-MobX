import React from "react";
import "./App.css";

import aliasStore from "./store/AliasStore";
import AliasRow from "./AliasRow";

import { observer } from "mobx-react";

const AliasList = () => {
  const aliasRows = aliasStore.aliases.map(person => (
    <AliasRow key={person.alias} person={person} />
  ));
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
        <tbody>{aliasRows}</tbody>
      </table>
    </div>
  );
};

export default observer(AliasList);
