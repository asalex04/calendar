import React, {useState} from 'react';
import {Sign} from "../Calendar/styles";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import styled from "styled-components";

const Main = styled.main`
  background: #E6E6E6;
  border-radius: 5px;
`

const AddEvent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Sign onClick={handleShow}>{'+'}</Sign>
            <Modal show={show} onHide={handleClose}>
                <Main><Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Col style={{display: "grid", justifyItems: "center"}}>
                                <Row style={{fontWeight: "bold"}}>https://calendar.com</Row>
                                <Row>Enter event time</Row>
                                <Row>YYYY-MM-DD HH:mm:ss</Row>
                            </Col>
                            <Form.Control
                                type="text"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                    <Modal.Footer style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr"
                    }}>
                        <Button variant="outline-primary" size="lg" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="outline-primary" size="lg" onClick={handleClose}>
                            OK
                        </Button>
                    </Modal.Footer></Main>
            </Modal>
        </>
    );
};

export default AddEvent;
