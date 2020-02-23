import { observable, decorate } from "mobx";
import axios from "axios";

class AliasStore {
  aliases = [];
  errors = {};

  fetchList = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/alias/");
      const aliases = res.data;
      this.aliases = aliases;
    } catch (err) {
      console.error(err);
    }
  };

  createAlias = async (userData, handleReset) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/alias/", userData);
      const alias = res.data;
      this.aliases.push(alias);
      handleReset();
    } catch (err) {
      this.errors = err.response.data;
    }
  };
}

decorate(AliasStore, {
  aliases: observable,
  errors: observable
});

export default new AliasStore();
