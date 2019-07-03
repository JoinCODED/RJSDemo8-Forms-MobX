# RJSDemo8 - Forms - MobX

[Slides](https://docs.google.com/presentation/d/1VNDFN2oIkKLUpKRZ7hkiRjyJTv3d7-Lp6eZJPZn2P5E/edit?usp=sharing)

1.  Clone the [backend](https://github.com/JoinCODED/RJSDemo7-Forms-Backend) and run the server

2.  Add the form in `AliasForm.js`

```javascript
return (
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
);
```

3. Convert component to class-based

```javascript
import React, {Component} from "react";

class AliasForm extends Component {
    render() {
        ...
    }
}

```

4. Go to Postman, and try out the backend to know the name of the fields

5. Create your state, make sure the properties have the same name as the required fields in the backend

```javascript
class AliasForm extends Component {
    state = {
      alias: "",
      description: "",
      email: ""
    };
```

6.  Add the handleChange method to the input elements:

```javascript
onChange={e => this.handleChange(e)}
```

7. Create your handleChange method for `alias` only:

```javascript
handleChange = e => {
  this.setState({ alias: e.target.value });
};
```

8. In `AliasStore.js` create the form action to be dispatched

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

9. Submit the form

Add the `onSubmit` in the form tag

```javascript
...

handleSubmit = (e) => {
  store.postForm(this.state);
}
...

<form onSubmit={this.handleSubmit}>
...
</form>

...
```

10. Explain why we need prevent default

```javascript
handleSubmit = e => {
  e.preventDefault();
  store.postForm(this.state);
};
```

11. Add the new data to the displayed list:

```javascript
...
this.data.push(res.data)
...
```
