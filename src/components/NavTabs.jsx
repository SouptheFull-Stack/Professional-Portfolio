import { Link, useLocation } from 'react-router-dom';
import '../App.css'

export default function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <nav className='nav'>
        <ul className="mitraNav">
            <li className="nav-button">
                <Link to="/"
                className={currentPage === "/" ? 'nav-link active buttons' : 'nav-link buttons'}
                >
                    Home
                </Link>
            </li>
            <li className="nav-button"> 
                <Link to="/About"
                className={currentPage === "/About" ? 'nav-link active buttons' : 'nav-link buttons'}
                >
                    About
                </Link>
            </li>
            <li className="nav-button">
                <Link to="/Portfolio"
                className={currentPage === '/Portfolio' ? 'nav-link active buttons' : 'nav-link buttons'}
                >
                    Portfolio
                </Link>
            </li>
            <li className="nav-button">
                <Link to="/Resume"
                className={currentPage === "/Resume" ? 'nav-link active buttons' : 'nav-link buttons'}
                >
                    Resume
                </Link>
            </li>
            <li className="nav-button">
                <Link to="/Contact"
                className={currentPage === "/Contact" ? 'nav-link active buttons' : 'nav-link buttons'}
                >
                    Contact
                </Link>
            </li>
        </ul>
        </nav>
    );
}