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
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
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
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
  render() {
    return (
      <div className="TodoList">
        <h1>Simple Todo List Whith React and Css</h1>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Entrer une liste"
            value={this.state.curentItem.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add New </button>
          <ListTodoInApp items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
        </form>
      </div>
    );
  }
}

export default AppTodoList;
