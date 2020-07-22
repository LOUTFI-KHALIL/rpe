import React, { Component } from "react";
import { Card } from "antd";
class Apropos extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Projets Realisés</h1>
        <p>
          Plusieurs projéts ont été realiser et ce qui suit et la liste de
          quelque exemple des réalisations au cours de cette dernnière année
        </p>
        <Card title="React JS & React Native">
          <Card type="inner" title="React JS">
            Site web dinamique Single Page Gestion de Stock
          </Card>
          <Card style={{ marginTop: 16 }} type="inner" title="React Native">
            Application Comment Faire un tagine marocain
          </Card>
        </Card>
      </div>
    );
  }
}

export default Apropos;
