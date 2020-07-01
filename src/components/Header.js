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
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li >
            <a href="#about">About</a>
          </li>
        </ul> 
      
       
    
      </div>
    );
  }
}

export default Header;
