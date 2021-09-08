import '../styles/App.css';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

function Calendar(props) {

  const history = useHistory()
  const { user } = props.props

  const [ events, setEvents ] = useState([])

  useEffect(() => {
    if (!user.loggedIn) {
      history.push ('/')
    } 
    else {
      const details = {
        email: user.email,
        date: "today"
      }
      
      let dayStart = moment().format().split("T")[1]
      dayStart = parseInt(dayStart[0] + dayStart[1])
      let dayEnd = 24 - dayStart - 1
      dayStart = dayStart * 60 * 60
      dayEnd = dayEnd * 60 * 60

      let hourStart = moment().format().split("T")[1]
      hourStart = parseInt(hourStart[3] + hourStart[4])
      let hourEnd = 60 - hourStart
      hourStart = hourStart * 60
      hourEnd = hourEnd * 60

      const date = Math.floor(Date.now() / 1000)
      const unixStart = date - (hourStart + dayStart)
      const unixEnd = date + (hourEnd + dayEnd)

    }
  }, []);

  return (
    <div className="Calendar">
      <h1>Here are your upcoming events for today:</h1>
    </div>
  );
}

export default Calendar;