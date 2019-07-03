# RJSDemo8 - Forms - MobX

[Slides](https://docs.google.com/presentation/d/1VNDFN2oIkKLUpKRZ7hkiRjyJTv3d7-Lp6eZJPZn2P5E/edit?usp=sharing)

1.  Clone the [backend](https://github.com/JoinCODED/RJSDemo7-Forms-Backend) and run the server

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
```

3.  Bind the form inputs to state

```javascript
class ControlledForm extends Component {
    state = {
      alias: "",
      description: "",
      email: ""
    };

    ...
textChange = (e) => {
this.setState({ [e.target.name]: e.target.value });
}
```

4.  Add the textChange method to the input elements:

```javascript
onChange={e => this.textChange(e)}
```

5.  In `AliasStore.js` create the form action to be dispatched

```javascript
  postForm = async (form) => {
    try {
        const res = await axios.post("http://127.0.0.1:8000/alias/", form);
        thi.form = res.data;
    } catch(err){
        this.statusMessage = err.response
    }
  }
```

6.  Submit the form

Add the `onSubmit` in the form tag

```javascript
...

submitForm = (e) => {
  e.preventDefault();
  store.postForm(this.state);
}
...

<form onSubmit={this.submitForm}>
...
</form>

...
```

7.  Add the new data to the displayed list:

```javascript
...
this.data.push(res.data)
...
```
