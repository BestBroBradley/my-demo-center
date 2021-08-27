import '../styles/App.css';
import API from '../utils/API.js'
import Authenticator from '../components/Authenticator'

function Home() {
  return (
    <div className="Home">
      <h1>Welcome Back to Allison's Demo Center!</h1>
      <h2>Authenticate with your email Address to get started!</h2>
      <Authenticator />
    </div>
  );
}

export default Home;