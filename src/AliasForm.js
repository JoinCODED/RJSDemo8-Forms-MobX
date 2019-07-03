import React, { Component } from "react";
import "./App.css";

import store from "./store/AliasStore";

class AliasForm extends Component {
  state = {
    alias: "",
    description: "",
    email: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    store.postForm(this.state);
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Alias*</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="alias"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">E-Mail*</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <input type="submit" /> <br />
      </form>
    );
  }
}

export default AliasForm;
