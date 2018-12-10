import { observable, decorate } from "mobx";
import axios from "axios";

class AliasStore {
  constructor() {
    this.statusMessage = "";
    this.aliases = [];
  }

  fetchList() {
    axios
      .get("http://127.0.0.1:8000/alias/")
      .then(res => res.data)
      .then(data => (this.aliases = data))
      .catch(err => {
        console.error(err.response);
      });
  }
}

decorate(AliasStore, {
  statusMessage: observable,
  aliases: observable
});

export default new AliasStore();
