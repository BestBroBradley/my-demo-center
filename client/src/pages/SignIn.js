import '../styles/App.css';
import API from '../utils/API';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function SignIn(props) {

  const { user, setUser } = props.props
  const emailInp = document.getElementById("return-email")
  const passwordInp = document.getElementById("return-password")


  const history = useHistory()

  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  })

  const handleSignIn = () => {
    const email = emailInp.value
    const password = passwordInp.value
    const returnee = {
      email,
      password
    }
    API.signin(returnee)
    .then(response => {
      if (response.data === "Password doesn't match") {
        alert(response.data)
        passwordInp.value = ""
      } else if (response.data === "User doesn't exist") {
        alert(`Sorry, looks like ${email} isn't a registered user.`)
        emailInp.value = ""
        passwordInp.value = ""
      } else {
        const info = {
          email: response.data.email
        }
        setUser({
          ...user,
          email: response.data.email,
          loggedIn: response.data.loggedIn,
          needsAuth: response.data.needsAuth
        })
        history.push('/')
      }
      })
  }

  return (
    <div className="SignIn">
      <h1>Welcome back!</h1>
      <div id="signin">
        <label htmlFor="return-email">Email</label><br />
        <input onChange={handleChange} id="return-email"></input><br />
        <label onChange={handleChange} htmlFor="return-password">Password</label><br />
        <input type="password" id="return-password"></input><br />
        <button onClick={handleSignIn}>Sign me in!</button>
      </div>
    </div>
  );
}

export default SignIn;