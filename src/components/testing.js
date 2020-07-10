import React, { Component } from "react";

class Testing extends Component {
 

    state = {
      users: [
        {
          key: "1",
          name: "Loutfi khalil",
          age: 35,
          address: "New York",
        },
        { key: "2", name: "Youssef Loutfi", age: 8, address: "London" },
        { key: "3", name: "Ilyass loutfi", age: 1, address: "Sidney " },
      ],
    };
  }

  render() {
    console.log(this.state.users.name, "ok");
    return (
      <div>
        <ul>
          <li> {this.state.users.name} </li>
        </ul>
      </div>
    );
  }
}

export default Testing;
