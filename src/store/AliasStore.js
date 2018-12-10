import { decorate, observable } from "mobx";
import axios from "axios";

class AliasStore {
  constructor() {
    this.data = [];
    this.statusMessage = "";
  }

  getForm() {
    axios
      .get("http://127.0.0.1:8000/alias/")
      .then(res => res.data)
      .then(data => (this.data = data))
      .catch(err => console.error(err.response));
  }

  postForm(data) {
    axios
      .post("http://127.0.0.1:8000/alias/", data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err.response);
      });
  }
}

decorate(AliasStore, {
  alias: observable,
  description: observable,
  email: observable,
  errors: observable
});

export default new AliasStore();
