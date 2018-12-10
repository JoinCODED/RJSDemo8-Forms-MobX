# RJSDemo8 - Forms - MobX

[Slides](https://docs.google.com/presentation/d/1VNDFN2oIkKLUpKRZ7hkiRjyJTv3d7-Lp6eZJPZn2P5E/edit?usp=sharing)

1.  Clone and backend and run the server
2.  Add the form in `ControlledForm.js`

```javascript
    render() {
        return (
            <form>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <span className="input-group-text">Alias*</span>
                    </div>
                        <input
                            type="text"
                            className="form-control"
                            name="alias"
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
                        />
                        </div>
                        <input type="submit" /> <br />
                        </form>
                        );
                        }
                    }
```

3.  Bind the form inputs to state

```javascript
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

    ...
textChange(e) {
this.setState({ [e.target.name]: e.target.value });
}
```

4.  In `AliasStore.js` create the form action to be dispatched

```javascript
  postForm(form){
    axios
      .post("http://127.0.0.1:8000/alias/", form)
      .then(res => {
        this.statusMessage = "Success"
      })
      .catch(err => {this.statusMessage = err.response});
  }
```

5.  Submit the form

Add the `onSubmit` in the form tag

```javascript
...
submission(e) {
e.preventDefault();
store.postForm(this.state);
}
...
<form onSubmit={this.submission.bind(this)}>
...
</form>

...
```
