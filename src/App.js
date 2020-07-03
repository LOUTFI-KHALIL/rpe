import React from 'react';
import './App.css';
//import Navbar from './components/NavbarTest'
import Footer from './components/Footer'
import Contents from './components/Content'
import Header from './components/Header';
import Menu from './components/Menu';
import TopMenu from './components/TopMenu';
import Counter from './components/Counter'
function App() {
  return (
    <div className="App">
       <Header/>
       <TopMenu/>
       <Counter/>
                  <Contents/> 
                       <Footer/>
          </div>

  );
}

export default App;
