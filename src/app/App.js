import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../home/home';
import Projects from '../projects/projects';
import About from '../about/about';
import Contact from '../contact/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Rachel Perez Portfolio</h1>
      <nav className="navbar">
       <ul className="menu">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/about">
          <li>About Me</li>
       </Link>
       <Link to="/contact">
          <li>Contact Me</li>
        </Link>
        </ul> 
    </nav>
    </header>
    <main>
      <Route 
        exact path='/' 
        component={Home} 
      />
      <Route 
        exact path='/projects' 
        component={Projects} 
      /> 
       <Route 
        exact path='/about' 
        component={About} 
      /> 
      <Route 
        exact path='/contact' 
        component={Contact} 
      />    
      </main>
    </div>
  );
}

export default App;
