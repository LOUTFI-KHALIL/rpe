import React, { Component } from 'react';
import './TopMenu.css';
class TopMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="TopMenu"> 
            <h1>Développeur front-end</h1>
            <h4>Le développeur front-end est en charge des parties des applications ou des sites web qui sont visibles directement par les utilisateurs et avec lesquelles ces derniers peuvent interagir. Pour faire simple, le développeur front-end évolue sur la partie client d’une app / d’un site. Il existe aussi les développeurs full stack qui évoluent pour leur part à la fois sur le côté front et back des sites/app.</h4>
            </div>
         );
    }
}
 
export default TopMenu;