import React, { Component } from "react";
import "./App.css";

class AliasRow extends Component {
  render() {
    let person = this.props.person;
    return (
      <tr>
        <td>{person.alias}</td>
        <td>{person.description}</td>
        <td>{person.email}</td>
      </tr>
    );
  }
}

export default AliasRow;
