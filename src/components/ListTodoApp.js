import React, { Component } from "react";
import "./ListTodoCss.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListTodoInApp(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>{item.text}</p>
        <span>
           <FontAwesomeIcon className="faicons" onClick={() => {
           props.deleteItem(item.key)
       }} icon="trash" />
       </span>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListTodoInApp;
