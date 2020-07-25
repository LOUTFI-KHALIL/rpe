import React, { Component } from "react";
import axios from "axios";
class importJsonAxios extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  getUsers = () => {
    axios.get("https://api.github.com/users").then((response) => {
      this.setState({
        users: response.data,
      });
    });
  };
  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div>
        <h1> import json axios</h1>
        {this.state.users.map((user) => (
          <ul key={user.id}>
            <li>{user.login}</li>
            <li>
              <a>{user.repos_url}</a>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default importJsonAxios;
