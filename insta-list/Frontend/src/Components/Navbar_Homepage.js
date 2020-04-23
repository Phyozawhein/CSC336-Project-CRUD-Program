import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';


export default class Navbar_Homepage extends Component {
    render() {
        return (
            <div>
                  <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="home">InstaList</Navbar.Brand>
                        <Nav className="ml-auto">
                        <Nav.Link href="home" >Home</Nav.Link>
                        <Nav.Link href="login" exact to= "/Pages/login" >Log In</Nav.Link>
                        <Nav.Link href="library" exact to= "/Pages/MyLibraries">My Library</Nav.Link>
                        </Nav>
                    </Navbar>
            </div>
        )



    }
    
}
