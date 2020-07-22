import React, { Component } from "react";
class TestState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CurentItems: {
        id: 0,
        nom: "",
        prenom: "",
      },

      items: [
        {
          id: 1,
          nom: "loutfi",
          prenom: "khalil",
        },
        {
          id: 2,
          nom: "loutfi",
          prenom: "Youssef",
        },
        {
          id: 3,
          nom: "loutfi",
          prenom: "Ilyass",
        },
      ],
    };
  }
  HandelAdd = (e) => {
    var maxId = this.state.items.length;

    e.preventDefault();
    const newItem = this.state.CurentItems;

    const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      CurentItems: {
        id: maxId + 1,
        nom: "",
        prenom: "",
      },
    });
  };
  HandelDellete = (valueId) => {
    const filtredItems = this.state.items.filter((item) => item.id !== valueId);
    this.setState({ items: filtredItems });
  };
  HandeleUpdate = (valueId) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.id === valueId) {
        item.nom = "e.target.value";
      }
      this.setState({ items: items });
    });
  };
  handelEvent = (e) => {
    var maxId = this.state.items.length;
    this.setState({
      CurentItems: {
        id: maxId + 1,
        nom: e.target.value,
        prenom: e.target.value,
      },
    });
  };
  handelChangeNom = (nom) => {
    this.setState({
      CurentItems: {
        nom: nom.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <h1>hello from TestState </h1>
        <ul>
          {this.state.items.map((item) => (
            <div key={item.id}>
              <li>{item.id}</li>
              <li>{item.nom}</li>
              <li>{item.prenom}</li>
              <input
                placeholder="ecrire "
                value={this.state.CurentItems.nom}
                onChange={this.handelEvent}
              ></input>
              <button onClick={this.HandelAdd}>Add</button>
              <button onClick={this.HandelDellete}>Delete</button>
              <button onClick={() => this.HandelDellete(item.id)}>
                Delete
              </button>
              <button
                onClick={() => this.HandeleUpdate(item.id)}
                onChange={(this.handelEvent, this.handelChangeNom)}
              >
                Update
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestState;
