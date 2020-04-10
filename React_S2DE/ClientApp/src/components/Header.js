import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <div style={{marginTop: "1px"}}>
                <Navbar style={{ backgroundColor: "#7e7e7e", borderRadius: '5px' }}>
                <Navbar.Brand style={{ color: "white", fontSize: "2.5rem", fontWeight: "bolder" }} href='#'>S2DE</Navbar.Brand>

              
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                       <h4>Henry M Jackson (Blue)</h4>
                    </Navbar.Text>
                </Navbar.Collapse>

             
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Welcome! <a href="#profile">Joe Schmuckatelli</a>
                    </Navbar.Text>
                </Navbar.Collapse>


                </Navbar>
            </div>
           
        );
            

    }
}

export default Header;

// bgcolors: #0191C8, #7e7e7e

//<Navbar.Header>
//    <Navbar.Brand>
//        <a href="/">Our Awesome Store</a>
//    </Navbar.Brand>
//</Navbar.Header>

//<Navbar fixedTop style={{
//    backgroundColor: '#cccccc'
//}}>
//    <Navbar.Brand>
//        <a href="/">S2DE</a>
//    </Navbar.Brand>
//    <Navbar.Collapse>
//        <Nav pullRight style={{ float: "right", textAlign: "right" }}>
//            <NavItem href="#">User Profile</NavItem>
//        </Nav>
//    </Navbar.Collapse>

//</Navbar>

        //);

//<Navbar fixedTop style={{ backgroundColor: '#cccccc', borderRadius: '5px', paddingTop: "px" }}>
//    <Navbar.Brand style={{ color: "black", fontSize: "2.5rem", fontWeight: "bolder" }} href='#'>S2DE</Navbar.Brand>
//    <Navbar.Collapse className="justify-content-center">
//        <Navbar.Text style={{ alignSelf: "center", textAlign: "center", color: "black", fontSize: "1.3rem", width: "320px" }}>Henry M Jackson (Blue)</Navbar.Text>
//    </Navbar.Collapse >
//    <Navbar.Collapse>
//        <Navbar.Text style={{ paddingRight: "10px", color: "grey" }}>

//            Welcome!

//                    </Navbar.Text>
//        <Navbar.Text>
//            <a className="profile" href=""> Sergey Russu</a>
//        </Navbar.Text>
//    </Navbar.Collapse >

//</Navbar>

// <Navbar style={{ backgroundColor: "#7e7e7e", borderRadius: '5px' }}>