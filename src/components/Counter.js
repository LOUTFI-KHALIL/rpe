import React, { Component } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
class Counter extends Component {
  state = {
    columns: [
      { title: "Nom et Prénom", dataIndex: "name" },
      { title: "Age", dataIndex: "age" },
      { title: "Addresse", dataIndex: "address" },
    ],
    data: [
      { key: "1", name: "Loutfi khalil", age: 35, address: "New York" },
      { key: "2", name: "Youssef Loutfi", age: 8, address: "London" },
      { key: "3", name: "Ilyass loutfi", age: 1, address: "Sidney " },
    ],
  };

  render() {
    const { columns, data } = this.state;
    return (
      <div>
        <h1>Tableau</h1>
        <Table columns={columns} dataSource={data} size="middle" />
      </div>
    );
  }
}

export default Counter;
