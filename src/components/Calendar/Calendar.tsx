import React, {useState} from 'react';
import {
    Main, GridWrapper, Panel, Sign, GridRow,
    Days, Month, Grid, Hours, Today
} from "./styles";
import {Week} from "../../utils/Week";
import moment from "moment";
import {Button, Form, Modal} from "react-bootstrap";

const [week, daysOfWeek] = Week()
const listOfHour = Array.from(Array(11).keys()).map(n => n + 10)
const Cells = Array.from(Array(91))

function addEvent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// const addEvent = () => {
//     Example()
// }

const Calendar = () => {
    return (
        <Main>
            <Panel>
                <div>Interview Calendar</div>
                <Sign>

                </Sign>
            </Panel>
            <GridWrapper>
                <Days>
                    <GridRow>
                        {daysOfWeek.map(day => (
                            <div style={{fontSize: 12}}>{day}</div>
                        ))}
                    </GridRow>
                    <GridRow>
                        {week.map(day => (
                            <div>{day}</div>
                        ))}
                    </GridRow>
                    <Month>
                        <Sign>{'<'}</Sign>
                        <div style={{marginTop: 5}}>{moment().format('MMMM YYYY')}</div>
                        <Sign>{'>'}</Sign>
                    </Month>
                </Days>
                <Hours>
                    <div>09:00</div>
                    {listOfHour.map(hour => (
                        <div>{`${hour}:00`}</div>))}
                </Hours>
                <Grid>
                    {Cells.map(cell => (
                        <div style={{
                            background: "white",
                            padding: 14
                        }}></div>
                    ))}
                </Grid>
                <Today>Today</Today>
            </GridWrapper>
        </Main>
    );
};

export default Calendar;
