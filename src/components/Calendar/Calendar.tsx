import React, {useState} from 'react';
import {
    Main, GridWrapper, Panel, Sign, GridRow, Day,
    Days, Month, Grid, Hours, Today, Delete
} from "./styles";
import './styles.css'
import {Week} from "../../utils/Week";
import moment from "moment";
import AddEvent from "../AddEvent/AddEvent";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {removeData, setID} from "../../store/reducers/dataSlice";

const [week, daysOfWeek] = Week()
const currentDay = moment().format('DD').toString()
const listOfHour = Array.from(Array(11).keys()).map(n => n + 10)
const Cells = Array.from(Array(91).keys())

const Calendar = () => {
    const [isShow, setIsShow] = useState(false)
    const [id, setId] = useState(0)
    const dispatch = useAppDispatch()
    const {setOfData} = useAppSelector(state => state.data)

    const addEvent = (e: React.MouseEvent, id: number) => {
        setId(id)
        dispatch(setID(id))
        const element = e.currentTarget
        if (element.classList.contains('selected')) {
            const event = setOfData.find(i => i.id === id)
            event ? alert(event.event) : alert('event not exist')
        }
        const active = document.querySelector('.active')
        active && active.classList.remove('active')
        element.classList.add("selected")
        element.classList.add("active")
        setIsShow(true)
    }

    const removeEvent = () => {
        const elem = document.getElementById(String(id))
        elem && elem.classList.remove("selected", 'active')
        dispatch(removeData(id))
        setIsShow(false)
    }

    return (
        <Main>
            <Panel>
                <div>Interview Calendar</div>
                <Sign>
                    <AddEvent/>
                </Sign>
            </Panel>
            <GridWrapper>
                <Days>
                    <GridRow>
                        {daysOfWeek.map((day, id) => (
                            <div key={id} style={{fontSize: 12}}>{day}</div>
                        ))}
                    </GridRow>
                    <GridRow>
                        {week.map((day, id) => (
                            day === currentDay ? <Day key={id}>{day}</Day> : <div key={id}>{day}</div>
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
                    {Cells.map((cell, id) => (
                        <div key={id} id={id.toString()} className='cell' onClick={(e) => addEvent(e, id)}/>
                    ))}
                </Grid>
                <Today>Today</Today>
                <Delete primary={isShow} onClick={() => removeEvent()}>Delete</Delete>
            </GridWrapper>
        </Main>
    );
};

export default Calendar;
