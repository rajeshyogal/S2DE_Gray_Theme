import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

export class UserNavBar extends Component {


    render() {
        return (
            <div style={{}}>
                <Nav justify variant="pills" defaultActiveKey="/home" className="m-3" style={{ backgroundColor: '#cccccc', borderRadius: '5px' }}>
                    <Nav.Item style={{ color: "black" }} > <Nav.Link eventKey="link-1" >  <h5> Data Transfer </h5> </Nav.Link> </Nav.Item>
                    <Nav.Item> <Nav.Link href="/home" style={{ color: "black" }}> <h5>  Data Upload  </h5> </Nav.Link> </Nav.Item>
                    <Nav.Item> <Nav.Link eventKey="link-2" style={{ color: "black" }}> <h5> Logs </h5> </Nav.Link> </Nav.Item>
                    <Nav.Item> <Nav.Link eventKey="link-3" style={{ color: "black" }}> <h5> Documentation </h5> </Nav.Link> </Nav.Item>
                </Nav>
            </ div>
        );
    }

}

//paddingRight: "480px"
// backgroundColor: '#cccccc',