import React, { Component } from "react";
import "./AppTodoListCss.css";
import ListTodoInApp from "./ListTodoApp";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit,faTrash)
class AppTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      curentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(e) {
    this.setState({
      curentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.curentItem;
    console.log(newItem);
    if (newItem !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        curentItem: {
            text: "",
            key: "",
          },
      });
    }
  }
  render() {
    return (
      <div className="TodoList">
        <form id="to-do-form" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Entrer une liste"
            value={this.state.curentItem.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add New </button>
          <ListTodoInApp items={this.state.items} />
        </form>
      </div>
    );
  }
}

export default AppTodoList;
