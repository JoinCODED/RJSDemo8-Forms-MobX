import { observable, decorate } from "mobx";
import axios from "axios";

class AliasStore {
  data = [];
  statusMessage = "";

  fetchList = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/alias/");
      this.aliases = res.data;
    } catch (err) {
      console.error(err);
    }
  };

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
  statusMessage: observable,
  aliases: observable
});

export default new AliasStore();
