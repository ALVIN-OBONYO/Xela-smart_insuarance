import Calendar from 'react-calendar'
import React, {useState} from 'react'
import {RiCalendarLine} from 'react-icons/ri'
import './Calendar.css'

const MyCalendar = () => {
    const [calendarDate, setCalendarDate] = useState(new Date())
   
    const changeDate = (calendarDate) => {
         setCalendarDate(calendarDate)
    }
    return (
        <div>
           <h3>Time Of accident <RiCalendarLine /></h3>
           <Calendar onChange={changeDate} value={calendarDate} />
           <h4>{calendarDate.toDateString()}</h4>

        </div>
    )
}

export default MyCalendar