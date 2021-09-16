import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/App.css';
import Navbar from './components/Navbar'
import Calendar from './pages/Calendar'
import Contacts from './pages/Contacts'
import Emails from './pages/Emails'
import Scheduler from './pages/Scheduler'
import Home from './pages/Home'
import Postauth from './pages/Postauth'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NewMeeting from './pages/NewMeeting'
import Booking from './pages/Booking'

function App() {

  const [user, setUser] = useState({
    email: "",
    loggedIn: false
  });

  return (
    <div className="App">
      <Router>
        <Navbar props={{ user }} />
        <Switch>
          <Route path="/sign-in" render={() => (<SignIn props={{ user, setUser }} />)} />
          <Route path="/sign-up" render={() => (<SignUp props={{ user, setUser }} />)} />
          <Route path="/authenticate" render={() => (<Postauth props={{ user, setUser }} />)} />
          <Route path="/emails" render={() => (<Emails props={{ user }} />)} />
          <Route path="/calendar" render={() => (<Calendar props={{ user }} />)} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/scheduler" component={Scheduler} />
          <Route path="/new-meeting" component={NewMeeting} />
          <Route path="/book-meeting" render={() => (<Booking props={{ user, setUser }} />)} />
          <Route path="/" render={() => (<Home props={{ user, setUser }} />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
