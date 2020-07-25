import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Acceuil from "./components/Acceuil";
import TestState from "./components/TestState";
import Counter from "./components/Counter";
import Apropos from "./components/Apropos";
import FetchJson from "./components/FetchJson";
import AppTodoList from "./components/AppTodoList";
import Essei from "./components/essey";

import Timing from "./components/Timing";
import importJsonAxios from "./components/importJsonAxios";
import importJsonfetch from "./components/importJsonfetch";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/Acceuil">Acceuil</Link>
          </li>
          <li>
            <Link to="/AppTodoList">Todo List</Link>
          </li>
          <li>
            <Link to="/Counter">Tableau</Link>
          </li>
          <li>
            <Link to="/TestState">test</Link>
          </li>
          <li>
            <Link to="/Essei">essei</Link>
          </li>

          <li>
            <Link to="/Timing">timing</Link>
          </li>

          <li>
            <Link to="/importJsonAxios">importJsonAxios</Link>
          </li>

          <li>
            <Link to="/importJsonfetch">importJsonfetch</Link>
          </li>
          <li>
            <Link to="/Apropos">Apropos</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Acceuil />
          </Route>

          <Route path="/Acceuil">
            <Acceuil />
          </Route>

          <Route path="/Counter">
            <Counter />
          </Route>

          <Route path="/TestState">
            <TestState />
          </Route>

          <Route path="/essei">
            <Essei />
          </Route>

          <Route path="/AppTodoList">
            <AppTodoList />
          </Route>

          <Route path="/Apropos">
            <Apropos />
          </Route>

          <Route path="/Apropos">
            <FetchJson />
          </Route>

          <Route path="/Timing">
            <Timing />
          </Route>

          <Route path="/importJsonAxios" component={importJsonAxios}></Route>

          <Route path="/importJsonfetch" component={importJsonfetch}></Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
