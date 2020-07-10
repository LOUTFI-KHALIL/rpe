import React, { Component } from "react";
class TestState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        id: 1,
        nom: "loutfi",
        prenom: "khalil",
      },
    };
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        nom: e.target.value,
        Id: Date.now(),
      },
    });
    console.log(this.state.nom);
  }
  render() {
    return (
      <div>
        <h1>bonjourr</h1>
        <ul>
          <li>
            <input value={this.state.nom}></input>
            <button>Add</button>
            <button>delete</button>
            <button>update</button>
          </li>
        </ul>
      </div>
    );
  }
}
export default TestState;
