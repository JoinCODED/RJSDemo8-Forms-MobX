import React from "react";
import "./App.css";

function AliasRow(props) {
  const person = props.person;
  return (
    <tr>
      <td>{person.alias}</td>
      <td>{person.description}</td>
      <td>{person.email}</td>
    </tr>
  );
}

export default AliasRow;
