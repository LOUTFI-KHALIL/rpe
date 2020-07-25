import React, { Component } from "react";
import data from "../data/data.json";
class importJsonfetch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(data);
    return (
      <div>
        <h1>import json fetch</h1>
        {data.map((line) => (
          <ul key={line.id}>
            <li>{line.nom}</li>
            <li>{line.prenom}</li>
            <li>{line.age}</li>
            <li>{line.address.state}</li>
            <li>{line.address.streetAddress}</li>
            <li>{line.phoneNumbers.number}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default importJsonfetch;
