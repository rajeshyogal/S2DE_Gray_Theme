import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export class WelcomeMessage extends Component {


    render() {
        return (

            <div style={{}}>
                <Jumbotron fluid className="m-3" style={{ backgroundColor: '#cccccc',  borderRadius: '5px', padding: '30px', marginRight: "50px", marginLeft: "50px"}}>
                <h4> Welcome to Ship to Shore Data Exchange</h4>
                <h6 style={{ marginTop: "1.0rem", marginBottom: "1.0rem" }}>
                    S2DE provides the ability to backup and restore Nosis data for crew swaps,
                    access to Submarine On-Board Training (SOBT), Nosis, data repository for upload,
                    access to ship's training content updates and Nosis user management.
                </h6>
                <h6>
                    <strong>
                        ** If feature access is required but not available, please contact the S2DE Help Desk,
                        360-315-0695
                    </strong>
                </h6>
                </Jumbotron>
            </div>


        );
    }

}

//{ marginRight: "150px", marginLeft: "150px" }
//backgroundColor: '#cccccc',