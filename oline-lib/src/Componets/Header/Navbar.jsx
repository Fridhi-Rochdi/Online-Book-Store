import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({showmenu}){
    return(
        <div style={{left : showmenu &&"0"}}className="navbar">
            <ul className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/authors"className="navbar-link">Authors</Link>
                <Link to="/about"className="navbar-link">About Us</Link>
                <Link to="/contact-us"className="navbar-link">Contact</Link>
                <Link to="/registre"className="navbar-link">Registre</Link>
            </ul>
        </div>
    )
}