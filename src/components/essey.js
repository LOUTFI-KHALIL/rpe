import React, { Component } from "react";
class Essei extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentItem: {
        id: 0,
        nom: "",
        prenom: "",
      },
      items: [
        {
          id: 0,
          nom: "loutfi",
          prenom: "youssef",
        },
        {
          id: 1,
          nom: "loutfi",
          prenom: "ilyass",
        },
        {
          id: 2,
          nom: "loutfi",
          prenom: "khalil",
        },
      ],
    };
  }
  handeleChangeid = (t) => {
    this.setState({
      curentItem: {
        id: t.target.value,
      },
    });
    console.log(this.state.curentItem);
  };

  handeleChangenom = (e, text) => {
    this.setState({
      curentItem: {
        nom: e.target.value,
      },
    });
    console.log(this.state.curentItem);
  };

  handeleChangeprenom = (e) => {
    this.setState({
      curentItem: {
        prenom: e.target.value,
      },
    });
    console.log(this.state.curentItem);
  };
  addClient = (e) => {
    e.preventDefault();
    const newLine = this.state.curentItem;
    const Items = [...this.state.items, newLine];
    console.log(Items);
    this.setState({
      items: Items,
      curentItem: {
        id: 0,
        nom: "",
        prenom: "",
      },
    });
  };
  render() {
    return (
      <div>
        <form>
          {this.state.items.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  placeholder="Id"
                  value={item.id}
                  onChange={this.handeleChangeid}
                />
              </td>
              <td>
                <input
                  placeholder="enter le nom"
                  value={item.nom}
                  onChange={(e, text) => this.handeleChangenom}
                />
              </td>
              <td>
                <input
                  placeholder="enter le prenom"
                  value={item.prenom}
                  onChange={this.handeleChangeprenom}
                />
              </td>
              <td></td>
            </tr>
          ))}
          <input
            placeholder="Id"
            value={this.state.curentItem.value}
            onChange={this.handeleChangeid}
          />
          <input
            placeholder="enter le nom"
            value={this.state.curentItem.value}
            onChange={(e, text) => this.handeleChangenom}
          />
          <input
            placeholder="enter le prenom"
            value={this.state.curentItem.value}
            onChange={this.handeleChangeprenom}
          />
          <button on onClick={this.addClient}>
            Add
          </button>
          <button>delete</button>
          <button>update</button>
        </form>
      </div>
    );
  }
}
// https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
export default Essei;
