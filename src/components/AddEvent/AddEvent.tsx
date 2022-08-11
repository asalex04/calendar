import React, {useState} from 'react';
import {Sign} from "../Calendar/styles";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {removeData, setData} from "../../store/reducers/dataSlice";

const Main = styled.main`
  background: #E6E6E6;
  border-radius: 5px;
`

const AddEvent = () => {
    const [show, setShow] = useState(false);
    const [event, setEvent] = useState('');
    const {id, setOfData} = useAppSelector(state => state.data)
    const dispatch = useAppDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addEvent = () => {
        const oldEvent = setOfData.find(el => el.id === id)
        if (oldEvent) {
            dispatch(removeData(id))
        }
        dispatch(setData({id, event}))
        setEvent('')
        handleClose()
    }

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
                                value={event}
                                onChange={e => setEvent(e.target.value)}
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
                        <Button variant="outline-primary" size="lg" onClick={() => addEvent()}>
                            OK
                        </Button>
                    </Modal.Footer></Main>
            </Modal>
        </>
    );
};

export default AddEvent;
