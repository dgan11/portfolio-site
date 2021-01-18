import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';


// function App() { // convert the app.js component to a class based component bc we will use state inside of it
class App extends React.Component {

  // 2. Create the constructor
  constructor(props) {
    super(props); // super() used within the constructor of a function to call the parent constructor function

    // Create a state for the top-level stuff in the website (header, links, home, about, contact)
    this.state = {
      title: 'Altan Insights',
      headerLinks: [ // Everything we need for our navbar
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],

      // Top level information for each page
      home: {
        title:    'Be Relentless',
        subTitle: 'Projects that make a difference',
        text:     'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: `Let's talk`
      }
    }
  }

  // 1. Create the render method and move the return method inside
  render() {
    return (
      // 3. Add the router and create the navbar using Bootstrap and React
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Altan Insights</Navbar.Brand>


            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          

        </Container>
      </Router>
    );
  }

}


export default App;
