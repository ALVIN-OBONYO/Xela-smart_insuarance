import Calendar from 'react-calendar'
import React, {useState} from 'react'
import './Calendar.css'

const MyCalendar = () => {
    const [calendarDate, setCalendarDate] = useState(new Date())
   
    const changeDate = (calendarDate) => {
         setCalendarDate(calendarDate)
    }
    return (
        <div>
           <h3>Date Of Accident</h3><br/>
           <Calendar onChange={changeDate} value={calendarDate} />
           <h4>{calendarDate.toDateString()}</h4>

        </div>
    )
}

export default MyCalendar