import '../styles/App.css';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import API from '../utils/API'

function Booking(props) {

    const history = useHistory()
    const { user, setUser } = props.props
    let hosts = []

    useEffect(() => {
        if (!user.loggedIn) {
          history.push ('/')
        } 
        else {
          API.getusers()
          .then(response => {
            console.log(response)
            const emails = response.data
            hosts = emails
          })
        }
      }, []);

    // add useEffect hook to query my DB for all users

    // set those users to the state

    // render set of options based on that info

    // when user clicks certain email, set host to that email

    // set up ternary operator 

    const [ host, setHost ] = useState("")



  return (
    <div className="Booking">
      <h1>Make a new booking below</h1>
      <form action="#">
      <label for="host">I'd like to meet with...</label>
      <select name="host" id="host">
        <option value="ex1">email1@gmail.com</option>
        <option value="ex2">email2@gmail.com</option>
      </select>
      <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default Booking;