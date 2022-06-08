import React, {useState} from 'react';
import {
    Main, GridWrapper, Panel, Sign, GridRow, Day,
    Days, Month, Grid, Hours, Today, Delete
} from "./styles";
import './styles.css'
import {Week} from "../../utils/Week";
import moment from "moment";
import AddEvent from "../AddEvent/AddEvent";

const [week, daysOfWeek] = Week()
const currentDay = moment().format('DD').toString()
const listOfHour = Array.from(Array(11).keys()).map(n => n + 10)
const Cells = Array.from(Array(91).keys())

const Calendar = () => {
    const [isShow, setIsShow] = useState(false)

    const addButton = (e: React.MouseEvent) => {
        e.currentTarget.classList.add("active")
        setIsShow(true)
    }

    return (
        <Main>
            <Panel>
                <div>Interview Calendar</div>
                <Sign>
                    <AddEvent />
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
                            day === currentDay ? <Day>{day}</Day> : <div>{day}</div>
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
                        <div key={hour}>{`${hour}:00`}</div>))}
                </Hours>
                <Grid>
                    {Cells.map(cell => (
                        <div className='cell' onClick={(e) => addButton(e)}/>
                    ))}
                </Grid>
                <Today>Today</Today>
                <Delete primary={isShow}>Delete</Delete>
            </GridWrapper>
        </Main>
    );
};

export default Calendar;
