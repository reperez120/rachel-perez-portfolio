import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../home/home';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import './about.css';

class About extends Component {
    render() {
      return (
        <div className='About'>
            <header className='aboutHeader'>
                <h1>About Me</h1>
                <div className="aboutMeImage"> 
              </div>
            </header>
            <main className="aboutMain">
              <div className="aboutRow">
                <div className="aboutColumn">
                  While studying human languages as a PhD student at Yale, I developed an interest in computer languages. 
                  That interest inspired me to enroll in Thinkful’s Full Stack Web Development Program, which I will complete in August 2019.
                  I have developed my programming skills through a number of <Link to="/projects">projects</Link> and through applying syntax analysis methods I learned as a linguistics student.
                  I currently have experience with full-stack web development using technologies that include HTML, CSS, Javascript, JQuery, Node, PostgreSQL, Express, Bootstrap, AngularJS, ReactJS. 
                  I also have experience with UX/UI Design and technical writing, as well as with technologies such as GitHub and DBeaver.
                  I am excited to deepen my knowledge in these areas and expand it to others.
                </div>
                <div className="aboutColumn">
                  I am based in the Boston area, but am willing to work remotely or relocate. 
                  Please feel free to <Link to="/contact">contact me</Link> if you have any opportunities that might be a good fit, if you have any questions, 
                  or if you just are interested in discussing the finer points of learning React.
                 When I am not working on programming, I enjoy ice skating and dancing, though I do not necessarily do either very well. 
                I further enjoy photography, drawing, and cooking vegan meals, which I do moderately well.
              </div>
              </div>
            </main>
        </div>
      );
    } 
}

export default About;