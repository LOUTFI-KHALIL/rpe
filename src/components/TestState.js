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
    alert("button ad is clicked");

    e.preventDefault();
    const newItem = this.state.CurentItems;

    const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      CurentItems: {
        nom: "",
        prenom: "",
      },
    });
  };
  HandelDellete = () => {
    alert("Button delete is clicked");
  };
  HandeleUpdate = () => {
    alert("Update is clicked");
  };
  handelEvent = (e) => {
    this.setState({
      CurentItems: {
        id: 5,
        nom: e.target.value,
        prenom: "Meriem",
      },
    });
  };
  render() {
    return (
      <div>
        <h1>hello from TestState </h1>
        <ul>
          {this.state.items.map((item) => (
            <ul key={item.id}>
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
              <button onClick={this.HandeleUpdate}>Update</button>
            </ul>
          ))}
          ;
        </ul>
      </div>
    );
  }
}

export default TestState;
