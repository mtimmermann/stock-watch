var app = app || {};

class ReactStockAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      code: '',
      isError: false
    }
  }

  //handleSubmit = (e, message) => {
  handleSubmit (e) {
    e.preventDefault();
    
    // if (this.state.code !== '') {
    //   console.log('submit ->code: '+ this.state.code);
    //   this.setState({isError: true});
    // }
    //app.addName(this.state.code);
  };

  //handleChange = (e) => {
  handleChange(e) {
    this.state.isError = false;
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <label>Add Stock Code</label>
        <form onSubmit={this.handleSubmit} novalidate>
          <div className="input-group">
            <input name="code" type="text" className="form-control" placeholder="Stock Code"
              onChange={this.handleChange} value={this.state.code} />
            <span className="input-group-btn">
              <button className="btn btn-success" type="submit" disabled={!this.state.code}>Add</button>
            </span>
          </div>
        </form>
        {this.state.isError ? (
          <div className="error">Could not find stock code</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
};


ReactDOM.render(<ReactStockAddForm />, document.querySelector('#stock-add-form'));

console.log(window.location.pathname);
console.log('app: '+ Object.keys(app));
app.addName('test');