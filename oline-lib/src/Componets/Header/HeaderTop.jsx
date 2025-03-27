import { Link } from 'react-router-dom';
import './HeaderTop.css';

export default function HeaderTop({ setShowmenu, showmenu }) {
    return (
        <div className="header-top">
            <div onClick={() => setShowmenu(prev => !prev)} className="header-top-menu">
                {showmenu ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
            </div>
            <div className="header-top-phone">
                <i className="bi bi-telephone-fill"></i>
                +216 99-999-999
            </div>
            <div className="header-top-text">
                Welcome to our Online Book Store
            </div>
            <Link to="/login"className="header-top-link">
                <i className="bi bi-person-fill"></i>
                Login
            </Link>
        </div>
    );
}
