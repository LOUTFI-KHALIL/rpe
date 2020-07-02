import React, { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import "antd/dist/antd.css";
import './Header.css';
//import { Layout, Menu, Breadcrumb } from "antd";
//const { Header, Content} = Layout;
//import { Router, Route, Link, browserHistory } from 'react-router'

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="Header">
       <ul>
          <li>
          {/* <Link to="/">Acceuil</Link> */}
          </li>
          <li>
            <a href="#news">Nouveau</a>
          </li>
          <li>
          
            <a href="#contact">Contact</a>
          </li>
          <li >
            <a href="#about">Apropos</a>
          </li>
          <li >
          {/* <Link to="/Content">Content</Link> */}
          </li>
        </ul> 
        
       
    
      </div>
    );
  }
}

export default Header;
