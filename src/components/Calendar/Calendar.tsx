import React from 'react';
import {GridWrapper, Panel, Sign, GridRow, Month} from "./styles";
import {Week} from "../../utils/Week";
import moment from "moment";

const [week, daysOfWeek] = Week()

const Calendar = () => {
    return (
        <div>
            <Panel>
                <div>Interview Calendar</div>
                <Sign>{'+'}</Sign>
            </Panel>
            <GridWrapper>
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
            </GridWrapper>
        </div>
    );
};

export default Calendar;
