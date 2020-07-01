import React from 'react';
import './App.css';
//import Navbar from './components/NavbarTest'
import Footer from './components/Footer'
import Contents from './components/Content'
import Header from './components/Header';
import Menu from './components/Menu';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Main">"
      <Menu/>
      <Contents/>
      </div>
            <Footer/>
    </div>
  );
}

export default App;
