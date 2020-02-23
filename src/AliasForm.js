import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";

import aliasStore from "./store/AliasStore";

class AliasForm extends Component {
  state = {
    alias: "",
    description: "",
    email: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    aliasStore.createAlias(this.state, this.handleReset);
  };

  handleReset = () => this.setState({ alias: "", description: "", email: "" });

  render() {
    return (
      <div>
        <p className="App-intro">Tell us about yourself:</p>
        <p>{aliasStore.statusMessage}</p>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Alias*</span>
            </div>
            <input
              type="text"
              className={`form-control ${aliasStore.errors.alias &&
                "is-invalid"}`}
              name="alias"
              value={this.state.alias}
              onChange={this.handleChange}
            />
            <div className="invalid-feedback">{aliasStore.errors.alias}</div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Description*</span>
            </div>
            <input
              type="text"
              className={`form-control ${aliasStore.errors.description &&
                "is-invalid"}`}
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <div className="invalid-feedback">
              {aliasStore.errors.description}
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">E-Mail*</span>
            </div>
            <input
              type="text"
              className={`form-control ${aliasStore.errors.email &&
                "is-invalid"}`}
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div className="invalid-feedback">{aliasStore.errors.email}</div>
          </div>
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default observer(AliasForm);
