import React, { Component } from 'react';
import { Navbar, Grid } from 'react-bootstrap';

import { Link } from "react-router-dom";

// import './Tool.css';

class Footer extends Component {

    render() {

        return (
            <Navbar fixed="bottom" expand="lg" style={{ backgroundColor: "", borderRadius: '5px'  }}>
                <Navbar.Text style={{color:"black"}}>
                    <h6>Version S2DE 4.1.0</h6>
                </Navbar.Text>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{ color: "black"}}>
                        <h6><a style={{}} href="">Accessibility Section 508</a></h6>
                    </Navbar.Text>
                </Navbar.Collapse >

            </Navbar>
        );
    }
}

export default Footer;

// bgcolor: #0191C8
 