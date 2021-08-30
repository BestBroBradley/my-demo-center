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

function App() {

  const [user, setUser] = useState({
    token: "",
    email: "",
    loggedIn: false
  });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route path="/authenticate" render={() => (<Postauth props={{user, setUser}}/>)}/>
        <Route path="/emails" component={Emails} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/scheduler" component={Scheduler} />
        <Route path="/" render={() => (<Home props={{user, setUser}}/>)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
