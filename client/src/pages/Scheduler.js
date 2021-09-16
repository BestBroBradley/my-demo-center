import '../styles/App.css';
import NewScheduler from '../components/NewScheduler'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Scheduler() {

  const history = useHistory()

  const [params, setParams] = useState({
    insured: false,
    provider: ""
  })

  const handleClick = (event) => {
    const { name } = event.target
    history.push(`/${name}`)
  }

  return (
    <div className="Scheduler">
      <h1>Welcome to the scheduler demo page.</h1>
      <h2>Make a selection below</h2>
      <button name="new-meeting" onClick={handleClick}>Create a New Meeting Type</button>
      <button name="book-meeting" onClick={handleClick}>Book a meeting</button>
    </div>
  );
}

export default Scheduler;