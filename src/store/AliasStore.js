import { observable, decorate } from "mobx";
import axios from "axios";

class AliasStore {
  statusMessage = "";
  aliases = [];

  fetchList = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/alias/");
      this.aliases = res.data;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(AliasStore, {
  statusMessage: observable,
  aliases: observable
});

export default new AliasStore();
