import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../projects/projects';
import About from '../about/about';
import Contact from '../contact/contact';
import './home.css';

class Home extends Component {
    render() {
      return (
        <div className='Home'>
            <header className='homeHeader'>
              <div className="leafImage"> 
              <h6>© Rachel Perez</h6>
              </div>
            </header>
            <main className="homeMain">
              <div className="homeRow">
                <div className="homeColumn">
                  My name is Rachel and I am a web developer with experience using 
                  Node, Express and React to build full stack web apps looking to 
                  deepen my knowledge in those areas and expand it to others.
                </div>
                <div className="homeColumn">
                  To see some of my work, check out my <Link to="/projects">Projects</Link> page.
                  To learn more details about my skillset, programming journey, and some of my other interests and skills check out my <Link to="/about">About Me</Link> page.
                  If you are interested in getting in touch with me you can reach me through any of the methods listed on my <Link to="/contact">Contact Me</Link> page.
                </div>
                </div>
            </main>
        </div>
      );
    } 
}

export default Home;


