import '../styles/App.css';
import API from '../utils/API.js'
import Authenticator from '../components/Authenticator'
import { Link } from 'react-router-dom'

function Home(props) {

  const { user, setUser } = props.props

  return (
    <div className="Home">
      <h1>Welcome to Allison's Demo Center!</h1>
      <h2>Sign in or sign up below.</h2>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
      <h2>Authenticate with your email address to get started.</h2>
      <Authenticator props={{ user, setUser }} />
    </div>
  );
}

export default Home