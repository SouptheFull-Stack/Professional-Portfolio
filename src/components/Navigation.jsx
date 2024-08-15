import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav-box is-flex is-flex-direction-row is-justify-content-space-evenly">
            <li className="nav-button">
                <Link to="/"
                className={currentPage === "/" ? 'nav-link ' : 'nav-link'}
                >
                    Home
                </Link>
            </li>
            <li className="nav-button"> 
                <Link to="/About"
                className={currentPage === "/About" ? 'nav-link' : 'nav-link '}
                >
                    About
                </Link>
            </li>
            <li className="nav-button">
                <Link to="/Portfolio"
                className={currentPage === '/Portfolio' ? 'nav-link' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li className="nav-button">
                <Link to="/Resume"
                className={currentPage === "/Resume" ? 'nav-link' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
            <li className="nav-button">
                <Link to="/Contact"
                className={currentPage === "/Contact" ? 'nav-link' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
}