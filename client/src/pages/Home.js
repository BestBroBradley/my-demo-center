import '../styles/App.css';
import { Link } from 'react-router-dom'

function Home(props) {

  const { user } = props.props

  const logged =
    <>
      <div className="Home">
        <h1>Check out our email, calendar, and contacts views.</h1>
      </div>
    </>

  const notLogged =
    <>
      <div className="Home">
        <h1>Welcome to Allison's Demo Center!</h1>
        <h2>Sign in or sign up below.</h2>
        <button><Link to="/sign-in">Sign In</Link></button>
        <button><Link to="/sign-up">Sign Up</Link></button>
      </div>
    </>

  return (user.loggedIn ? logged : notLogged);
}

export default Home