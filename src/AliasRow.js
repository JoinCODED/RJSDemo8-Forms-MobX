import React from "react";
import "./App.css";

const AliasRow = ({ person }) => {
  return (
    <tr>
      <td>{person.alias}</td>
      <td>{person.description}</td>
      <td>{person.email}</td>
    </tr>
  );
};

export default AliasRow;
