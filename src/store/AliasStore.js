import { decorate, observable } from "mobx";
import axios from "axios";

class AliasStore {
  constructor() {
    this.statusMessage = "";
    this.aliases = [];
  }

  fetchList = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/alias/");
      this.aliases = res.data;
    } catch (err) {
      console.error(err.response);
    }
  };

  postForm = async data => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/alias/", data);
      this.aliases.push(res.data);
    } catch (err) {
      console.error(err.response);
    }
  };
}

decorate(AliasStore, {
  statusMessage: observable,
  aliases: observable
});

export default new AliasStore();
