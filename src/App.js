import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    newItem: "",
    
    dept: "",
    rating: "",
    list: [],
  };

  updateDataInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem(e) {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem,

      dept: this.state.dept,
      rating: this.state.rating,
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      
      list,
      newItem: "",
      dept: "",
      rating: "",
    });
  }

  checkHandle(e) {
    this.state.rating.length === 0 ||
    this.state.dept.length === 0 ||
    this.state.newItem.length === 0
      ? alert("fill all feilds")
      : this.addItem();
  }

  render() {
    return (
      <div className="form">
        <h1>Employee Feedback Form</h1>
        <div className="Display">
          <div>
            <label>
              Name :
              <input
                className="input input1"
                value={this.state.newItem}
                onChange={(e) => this.updateDataInput("newItem", e.target.value)}
                
                
              />
            </label>
            <br />
            <label>
              Department :
              <input
                className="input input2"
                value={this.state.dept}
                onChange={(e) => this.updateDataInput("dept", e.target.value)}
                
               
              />
            </label>
            <br />
            <label>
              Rating :
              <input
                type="number"
                className="input input3"
                value={this.state.rating}
                onChange={(e) => this.updateDataInput("rating", e.target.value)}
                
               
              />
            </label>
            <br />
            <button
              id="submit"
              className="btn"
              onClick={(e) => this.checkHandle()}
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>

        <ul className="listOf">
          {this.state.list.map((item) => {
            return (
              <li style={{ margin: "1rem" }} key={item.id}>
                Name : {item.value} | Department : {item.dept} | Rating :
                {item.rating}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
