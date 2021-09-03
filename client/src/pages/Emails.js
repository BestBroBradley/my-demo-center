import '../styles/App.css';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Email from '../components/Email'
import API from '../utils/API';

function Emails(props) {

  const history = useHistory()
  const { user } = props.props
  const [emails, setEmails] = useState([])

  useEffect(() => {
    if (!user.loggedIn) {
      history.push ('/')
    } 
    else {
      API.getmail(user.email)
      .then(response => {
        setEmails(response.data)
      })
    }
  }, []);

const renderEmails = () => {
  if (emails === []) {
    return <h1>Looks like you don't have any emails!</h1>
  } else {
    return (<><h1>Message Center</h1>{emails.map(email => <Email key={email.id} props={email}/>)}</>)
  }
}


return (
  <div className="Emails">
    {renderEmails()}
  </div>
)}

export default Emails;