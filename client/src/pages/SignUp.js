import '../styles/App.css';
import { useState } from 'react'
import API from '../utils/API';
import Authenticator from '../components/Authenticator'

function SignUp(props) {

    const { user, setUser } = props.props

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    })

    const handleSignUp = () => {
        const email = document.getElementById("new-email").value
        const password = document.getElementById("new-password").value
        setUser({
            ...user,
            email,
            loggedIn: true
        })
        const newUser = {
            email,
            password
        }
        API.signup(newUser)
            .then(response => {
                if (response.data === "Email already exists") {
                    alert(response.data)
                } else {
                    setState({...state, loggedOn: true})
                }
            })
    }

    return (state.loggedOn ? <Authenticator props={{ state, user, setUser }} /> : <div className="SignUp">
    <h1>Welcome!  Sign up below.</h1>
    <div id="signup">
        <label htmlFor="new-email">Email</label><br />
        <input onChange={handleChange} name="email" id="new-email"></input><br />
        <label htmlFor="new-password">Password</label><br />
        <input onChange={handleChange} name="password" type="password" id="new-password"></input><br />
        <button onClick={handleSignUp}>Sign me up!</button>
    </div>
</div>
)};

export default SignUp;