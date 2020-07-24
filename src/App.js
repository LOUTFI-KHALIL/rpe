import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
//import Navbar from './components/NavbarTest'
import Footer from "./components/Footer";
import Acceuil from "./components/Acceuil";
import TestState from "./components/TestState";
//import Header from './components/Header';
//import Menu from './components/Menu';
//import TopMenu from './components/TopMenu';
import Counter from "./components/Counter";
import Apropos from "./components/Apropos";
import AppTodoList from "./components/AppTodoList";
import Essei from "./components/essey";
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
            <Link to="/testo">testo</Link>
          </li>
          <li>
            <Link to="/testo">testo</Link>
          </li>
          <li>
            <Link to="/Essei">essei</Link>
          </li>
          <li>
            <Link to="/seules">essei Seule</Link>
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

          <Route path="/Testo">
            <testo></testo>
          </Route>

          <Route path="/seules">
            <seules />
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
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
