# RJSDemo8 - Forms - MobX

[Slides](https://docs.google.com/presentation/d/1VNDFN2oIkKLUpKRZ7hkiRjyJTv3d7-Lp6eZJPZn2P5E/edit?usp=sharing)


#### Setup

1. Clone [backend](https://github.com/JoinCODED/RJSDemo8-Forms-Backend) and run the server

2. Virtual Env Setup

   ```shell
   python3 -m venv demo
   ```

2. Go to Postman, and make a GET request to the backend to know the name of the expected fields (http://127.0.0.1:8000/alias/)

3. Add the form in `AliasForm.js`. Mention that the `name` attribute of the `input` tags HAVE TO MATCH what the backend expects. It will become clearer as to why later.

```
function AliasForm() {
  return (
    <div>
      <p className="App-intro">Tell us about yourself:</p>
      <form>
        <input type="text" name="alias" />
        <input type="text" name="description" />
        <input type="text" name="email" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
```

4.  Show them the browser. Wonderful. We have a form, but it looks inappropriate. Now, directly copy and paste this form into `AliasForm.js`. After pasting it, show them the new form. Tell them that NOTHING has changed other than styling.

```javascript
  return (
    <div>
      <p className="App-intro">Tell us about yourself:</p>
      <form>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Alias*</span>
          </div>
          <input type="text" className="form-control" name="alias" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <input type="text" className="form-control" name="description" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">E-Mail*</span>
          </div>
          <input type="text" className="form-control" name="email" />
        </div>
        <input type="submit" /> <br />
      </form>
    </div>
  );
```

5. Convert component to class-based (since we need a state)

```javascript
import React, {Component} from "react";

class AliasForm extends Component {
    render() {
        ...
    }
}

```


6. Create your state, make sure the properties have the same name as the required fields in the backend

```javascript
class AliasForm extends Component {
    state = {
      alias: "",
      description: "",
      email: ""
    };
```

7.  Add the handleChange method to the input elements:

```javascript
onChange={e => this.handleChange(e)}
```

7. Create your handleChange method for `alias` only:

```javascript
handleChange = e => {
  this.setState({ alias: e.target.value });
};
```

Using React Dev Tools, show them that only "alias" is being updated in the state, even if we use the other text inputs (email and description). This is not the desired outcome. 
What we want to happen is each part of the state gets updated independantly.

9. Modify the handleChange method:

```javascript
handleChange = e => {
  this.setState({ alias: e.target.value });
};
```
Now, it is apparent why the input `name` property needed to match those ones of the state.

10. Submit the form


Add the handleSubmit method
```javascript
handleSubmit = (e) => {
alert("I should submit a form!");
}
...
```

Then add the `onSubmit` in the <form> tag

```javascript
...
<form onSubmit={e => this.handleSubmit(e)}>
...
</form>
```

11. Explain why we need prevent default (the page is refreshing, we are losing the stored data in the state):

```javascript
handleSubmit = e => {
  e.preventDefault();
  alert("I should submit a form!");
};
```

12. In `AliasStore.js` create the form action to be dispatched

```javascript
postForm = async form => {
  try {
    const res = await axios.post("http://127.0.0.1:8000/alias/", form);
    console.log("Return value", res.data);
  } catch (err) {
    this.statusMessage = err.response;
  }
};
```

13. Go back to `AliasForm.js`, and call postForm: 

```javascript
handleSubmit = e => {
  e.preventDefault();
  store.postForm(this.state);
};
```

The data should post successfully. Refresh the page. To make the data appear without refreshing the page: 

14. In `AliasStore.js`,  add the new data to the displayed list:

```javascript
...
this.aliases.push(res.data)
...
```
