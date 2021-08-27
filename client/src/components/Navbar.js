import '../styles/App.css';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                <h1>Allison's Nylas Demo Page</h1>
                <h2>Testing git again</h2>
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
    );
}

export default Navbar;