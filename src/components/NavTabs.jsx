import { Link, useLocation } from 'react-router-dom';

export default function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul>
            <li>
                <Link to="/"
                className={currentPage === "/" ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link to="/About"
                className={currentPage === "/About"}
                >
                    About
                </Link>
            </li>
            <li>
                <Link to="/Portfolio"
                className={currentPage === '/Portfolio'}
                >
                    Portfolio
                </Link>
            </li>
            <li>
                <Link to="/Resume"
                className={currentPage === "/Resume"}
                >
                    Resume
                </Link>
            </li>
            <li>
                <Link to="/Contact"
                className={currentPage === "/Contact"}
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
}