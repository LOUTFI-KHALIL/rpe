import React, { Component } from "react";
import './Menu.css';
class Menu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Menu">
                <h1>Menu</h1>
                <ul>
                 <li>Menu1</li>
                 <li>Menu2</li>
                 <li>Menu3</li>
                 <li>Menu4</li>
                 <li>Menu5</li>
                 <li>Menu6</li>
                </ul>
            </div>
         );
    }
}
 
export default Menu;