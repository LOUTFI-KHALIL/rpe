import React, { Component } from "react";
var a, b, c;
class Essei extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentItem: {
        id: null,
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
  handeleChange = (e) => {
    const valeur = e.target.value;
    this.setState({
      curentItem: { ...this.state.curentItem, [e.target.name]: valeur },
    });
  };

  // add neu client
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
  // end arrow function add client

  valueId = (valeurId, valeurnom, valeuprenom) => {
    a = valeurId;
    b = valeurnom;
    c = valeuprenom;
    this.setState({
      curentItem: {
        id: a,
        nom: b,
        prenom: c,
      },
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
  };
  handleDelete = (ids) => {
    const filtredItems = this.state.items.filter((item) => item.id !== ids);
    this.setState({ items: filtredItems });
  };

  // handelDubleClick = () => {
  //   const selectedline = this.state.items.filter((item) => item.id === a);

  //   this.setState({ curentItem: selectedline });

  //   console.log(selectedline);
  // };

  handelUpdate = () => {
    const filtredItems = this.state.items.filter((item) => item.id !== a);
    this.setState({ items: filtredItems });
    console.log(filtredItems, "filtredItems");
    console.log(this.state.items, "items");
    const newLine = this.state.curentItem;
    console.log(newLine, "newLine");
    const Items = [...filtredItems, newLine];
    console.log(Items, "Items+newLine");

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
        {this.state.items.map((item) => (
          <ul
            key={item.id}
            onClick={() => this.valueId(item.id, item.nom, item.prenom)}
          >
            <li>
              <input disabled="disabled" placeholder="Id" value={item.id} />
            </li>
            <li>
              <input
                disabled="disabled"
                placeholder="enter le nom"
                value={item.nom}
              />
            </li>
            <li>
              <input
                disabled="disabled"
                placeholder="enter le prenom"
                value={item.prenom}
              />
            </li>
          </ul>
        ))}
        <input
          type="text"
          name="id"
          placeholder="Entrer id"
          value={this.state.curentItem.id}
          onChange={this.handeleChange}
        />
        <input
          type="text"
          name="nom"
          placeholder="enter le nom"
          value={this.state.curentItem.nom}
          onChange={this.handeleChange}
        />
        <input
          type="text"
          name="prenom"
          placeholder="enter le prenom"
          value={this.state.curentItem.prenom}
          onChange={this.handeleChange}
        />
        <form onSubmit={this.handelSubmit}>
          <button onClick={this.addClient}>Add</button>
          <button onClick={() => this.handleDelete(a)}>delete</button>
          <button onClick={this.handelUpdate}>update</button>
        </form>
      </div>
    );
  }
}
// https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
export default Essei;
