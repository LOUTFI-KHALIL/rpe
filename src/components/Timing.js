import React, { Component, Fragment } from "react";
import Item from "antd/lib/list/Item";
import { ThemeProvider } from "react-bootstrap";
class Timing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentitem: {
        idClient: 0,
        nomClient: "nom",
        prenomClient: "prenom",
      },
      items: [
        {
          idClient: 0,
          nomClient: "loutfi",
          prenomClient: "khalil",
        },
        {
          idClient: 1,
          nomClient: "loutfi",
          prenomClient: "youssef",
        },
        {
          idClient: 0,
          nomClient: "loutfi",
          prenomClient: "ilyass",
        },
      ],
    };
  }
  handele;
  render() {
    return (
      <Fragment>
        <div>
          {this.state.items.map((item) => (
            <ul key={item.idClient}>
              <li>{item.idClient}</li>
              <li>{item.nomClient}</li>
              <li>{item.prenomClient}</li>
            </ul>
          ))}
          <form>
            <input
              type="text"
              name="idClient"
              placeholder="entrer id client"
              value={this.state.curentitem.idClient}
            />
            <button>add</button>

            <input
              type="text"
              name="nomClient"
              placeholder="entrer nom client"
              value={this.state.curentitem.nomClient}
            />
            <button>update</button>

            <input
              type="text"
              name="prenomClient"
              placeholder="entrer prenon client"
              value={this.state.curentitem.prenomClient}
            />
            <button>delete</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Timing;
