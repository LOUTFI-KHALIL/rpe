import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
//import Navbar from './components/NavbarTest'
import Footer from "./components/Footer";
import Acceuil from "./components/Acceuil";
//import Header from './components/Header';
//import Menu from './components/Menu';
//import TopMenu from './components/TopMenu';
import Counter from "./components/Counter";
import Apropos from "./components/Apropos";
import AppTodoList from "./components/AppTodoList";
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
            <Link to="/Apropos">Apropos</Link>
          </li>
          <li>{/* <Link to="/Content">Content</Link> */}</li>
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
