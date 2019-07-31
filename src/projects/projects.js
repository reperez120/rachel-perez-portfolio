import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import './projects.css';

class Projects extends Component {
    render() {
      return (
        <div className='Projects'>
            <header className='projectsHeader'>
                <h1>Projects</h1>
                <h3>Below is a selection of apps I developed. For each, I have provided the app name, a description, a screenshot, a list of technologies used, and links to the live version and GitHub repo. </h3>
            </header>
            <br></br>
            <main className="projectsMain">
              <h2>
                Write Now
              </h2>
              <div className="projectsRow">
                <div className="projectsColumnLeft">
                  Write Now is a full stack app designed to help people who are practicing their writing skills by providing randomly generated writing prompts. 
                  The back end is an API that is composed of lists of words that are organized by part of speech.
                  When a user hits a form submit button on the client side, the front end fetches words from each part of speech category from the API to form a random sentence that can serve as a writing prompt.
                </div>
                <div className="projectsColumnRight">
                  <div
                    className="WriteNowImage">
              </div>
              </div>
              </div>
              <h3>Technologies Used:</h3> 
                   <h4>HTML, CSS, JavaScript, React, Node, Express, PostGreSQL</h4>
                  <h4> 
                    <a href="https://write-now-app.reperez120.now.sh/" 
                    target="_blank"> 
                    Live Version
                    </a> 
               
                <a href="https://github.com/reperez120/write-now-client" 
                target="_blank"> Client Repo
                </a> 
         
                <a href="https://github.com/reperez120/write-now-api"
                target="_blank">
                API Repo
                </a>
              </h4>
              <br></br>
              <h2>
                What'll It Be?
              </h2>
              <div className="projectsRow">
                <div className="projectsColumnLeft">
                  What'll It Be is a full stack app that recommends drinks based on weather. This app recommends a beverage and provide its recipe to the user based on the temperature of their location.
                  It is comprised of an API that contains a list of beverage recipes that are organized by temperature. Client side, users input their location, which is sent to a temperature API. 
                  A drink is returned to users based on the temperature of the location they entered. If the temperature of their location is above a certain degree mark, a cold drink recipe is returned; if the temperature is below a certain degree mark, a hot drink recipe is returned.
                </div>
                <div className="projectsColumnRight">
                  <div 
                    className="WhatllItBeImage">
                  </div>
                </div>
                </div>
                    <h3>Technologies Used:</h3> 
                   <h4>HTML, CSS, JavaScript, React, Node, Express, PostGreSQL</h4>
                  <h4> 
                    <a href="https://whatll-it-be-app.reperez120.now.sh/" 
                    target="_blank"> 
                    Live Version
                   </a> 
      
                  <a href="https://github.com/reperez120/whatll-it-be-app-client" 
                  target="_blank"> Client Repo
                  </a>  
                  
                  <a href="https://github.com/reperez120/whatll-it-be-mvp"
                  target="_blank">
                  API Repo
                  </a>
                </h4>
              <br></br>
              <h2>
                Cat-A-Log
              </h2>
              <div className="projectsRow">
                <div className="projectsColumnLeft">
                  The Cat-A-Log app uses the Cat API and the PetFinder API to display a list of cats with user-selected traits that are up for adoption in a specified area. The user selects desired traits in checkboxes and then inputs their zip code into an input form. Once the user clicks the form’s submit button, an event listener is triggered that fetches the Cat API, which contains a list of cat breeds and their characteristics, and returns an array of breeds that have the traits the user selected in the checkbox. The app next fetches the PetFinder API, which contains a list of pets up for adoption, and uses the breeds that were returned from the Cat API and the geographic area the user input as query parameters to return a list of cats with desired traits up for adoption in the user’s geographic area. The app then displays the returned array of cats’ names, photos, descriptions, and links to their adoption pages.
                </div>
                <div className="projectsColumnRight">
                <div 
                  className="CatALogImage">
                </div>
                </div>
                </div>
                <h3>Technologies Used: </h3> 
                <h4>HTML, CSS, JavaScript, JQuery, APIs</h4>
              <h4> 
                <a href="https://reperez120.github.io/CatALogApp/" 
                target="_blank"> 
                Live Version
                </a> 
             
                <a href="https://github.com/reperez120/CatALogApp" 
                target="_blank"> Repo Version
                </a> 
              </h4>
              <h2>
              <br></br>
                A Hard Day's Night
              </h2>
              <div className="projectsRow">
                <div className="projectsColumnLeft">   
                  A fairly standard multiple choice quiz, A Hard Day’s Quiz uses a form element and radio buttons to present users with ten multiple choice questions on the Beatles. After selecting an answer, users receive immediate feedback on if they answered correctly.
                  If the answer is incorrect, the correct answer is shown. Users’ score and the number of the question that they are on are shown and updated with each question. After the last question, users are presented with their final score and with a restart
                  button that allows them to start the quiz from the beginning.
                  </div>  
                  <div className="projectsColumnRight">
                <div 
                  className="HardDaysImage">
                </div>
                </div>
                </div>
                <h3>
                  Technologies Used: 
                </h3>
                <h4>HTML, CSS, JavaScript, JQuery</h4>
                <h4>
                  <a href="https://reperez120.github.io/Beatles-Quiz" 
                  target="_blank"> 
                  Live Version
                </a> 
              
                <a href="https://github.com/reperez120/Beatles-Quiz" 
                target="_blank"> Repo Version
                </a> 
              </h4>
              <br></br>
          </main>
        </div>
      );
    } 
}

export default Projects;