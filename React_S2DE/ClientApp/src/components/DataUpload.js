import React, { Component } from 'react';
import { Tab, Row, Col, Nav, Container, ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';

export class DataUpload extends Component {


    render() {
        return (
            <Tab.Container  defaultActiveKey="CTQS" style={{}}>
                <Row style={{ marginLeft: "0px", marginTop: "-15px", marginRight: "-40px" }}>
                    <Col className="m-3" xs={10} s={10} md={3} lg={3} xl={2} style={{ backgroundColor: 'lightgray', borderRadius: '5px' }}>
                        <Nav variant="pills" className="flex-column" >
                            <Nav.Item>
                                <Nav.Link eventKey="CTQS"> <h6> CTQS Upload </h6> </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="AQDR" style={{color: "Black"}}> <h6> AQDR Upload </h6> </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col xs={10} s={10} md={7} lg={8} xl={9} style={{ backgroundColor: 'lightgray', borderRadius: '5px', marginBottom: '1rem', marginTop: '1rem' }}>
                        <Tab.Content>
                            <Tab.Pane eventKey="CTQS">
                                <Container fluid>
                                    <h5 className="mt-1"> Latest CTQS Upload {"<"}2019 - December - 20 - 18:40{">"} </h5>
                                    <ButtonGroup vertical className="ml-2 mb-2" >
                                        <Button className="m-1" variant="info">Afloat Upload</Button>
                                        <Button className="m-1" variant="info">Ashore Upload</Button>
                                    </ButtonGroup>
                                </Container>

                            </Tab.Pane>
                            <Tab.Pane eventKey="AQDR">
                                <Container fluid style={{ backgroundColor: 'lightgray' }}>
                                    <h5 className="mt-1"> Latest CTQS Upload {"<"}2019 - December - 20 - 18:40{">"} </h5>
                                    <h6> Select a file to upload </h6>
                                    <InputGroup className="mb-3">
                                        <FormControl placeholder="File name" aria-label="File path" aria-describedby="basic-addon2" />
                                        <InputGroup.Append>
                                            <Button variant="success"><strong>Browse...</strong></Button>
                                        </InputGroup.Append>
                                    </InputGroup>

                                    <Button style={{ marginRight: "1rem", marginBottom: '1rem' }} variant="info">Upload File</Button>
                                    <Button style={{ marginBottom: '1rem' }} variant="info">Cancel Upload</Button>

                                </Container>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>


                </Row>
            </Tab.Container>
        );
    }

}

// backgroundColor: 'lightgray'

//  marginRight: "500px"
// marginLeft: "20px",