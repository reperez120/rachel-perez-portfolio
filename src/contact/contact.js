import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../home/home';
import Projects from '../projects/projects';
import About from '../about/about';
import './contact.css';

class Contact extends Component {
    render() {
      return (
        <div className='Contact'>
            <header className='contactHeader'>
                <h1>Contact Me</h1>
                <div className="contactRow">
                  <div className="contactColumn">
                    <h3>Please feel free to contact me through any of the sources listed below by clicking on the corresponding text. 
                      I am always interested in learning about new opportunities, receiving feedback on previous work, and hearing from people with similar interests.</h3>
                  </div>
                </div>
            </header>
            <main>
                <ul className="contacts">
                  <div className="email">
                  </div>
                  <li> 
                    <address> 
                      <a className="link" href= "mailto:reperez@me.com">Email</a>
                    </address> 
                  </li>
                  <div className="linkedin">
                  </div> 
                  <li>
                    <a className="link" href="https://www.linkedin.com/in/rachel-e-perez/" 
                      target="_blank">LinkedIn
                    </a>
                  </li> 
                  <div className="github">
                  </div>
                  <li>
                    <a className="link" href="https://github.com/reperez120" 
                    target="_blank">GitHub
                    </a>
                  </li>
            </ul>
          </main>
        </div>
      );
    } 
}

export default Contact;