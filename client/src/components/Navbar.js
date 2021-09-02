import '../styles/App.css';
import { Link } from 'react-router-dom'

function Navbar(props) {

    const user = props.props
    const { loggedIn } = user.user

    console.log(loggedIn)

    const loggedNav =
        <div className="Navbar">
            <nav>
                <h1>Allison's Nylas Demo Page</h1>
                <ul className="nav-links">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/emails'>
                        <li>Emails</li>
                    </Link>
                    <Link to='/calendar'>
                        <li>Calendar</li>
                    </Link>
                    <Link to='/contacts'>
                        <li>Contacts</li>
                    </Link>
                    <Link to='/scheduler'>
                        <li>Scheduler</li>
                    </Link>
                </ul>
            </nav>
        </div>

    const unloggedNav = 
    <div className="Navbar">
            <nav>
                <h1>Allison's Nylas Demo Page</h1>
                <ul className="nav-links">
                    <Link to='/sign-in'>
                        <li>Sign In</li>
                    </Link>
                    <Link to='/sign-up'>
                        <li>Sign Up</li>
                    </Link>
                </ul>
            </nav>
        </div>

    return (loggedIn ? loggedNav : unloggedNav);
}

export default Navbar;