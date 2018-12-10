import React, { Component } from "react";
import "./App.css";

import store from "./store/AliasStore";

class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: "",
      description: "",
      email: ""
    };
    this.textChange = this.textChange.bind(this);
  }

  textChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submission(e) {
    e.preventDefault();
    store.postForm(this.state);
  }

  render() {
    return (
      <form onSubmit={e => this.submission(e)}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Alias*</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="alias"
            onChange={e => this.textChange(e)}
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
            onChange={e => this.textChange(e)}
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
            onChange={e => this.textChange(e)}
          />
        </div>
        <input type="submit" /> <br />
      </form>
    );
  }
}

export default ControlledForm;
