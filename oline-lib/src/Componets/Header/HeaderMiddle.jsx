import { Link } from 'react-router-dom'
import  './HeaderMiddle.css'
export default function HeaderMiddle(){
    return(
        <div className="header-middle">
        <div className="header-middle-logo">
            <i className="bi bi-book-fill"></i>
        </div>
        <div className="header-middle-search">
            <input type="text" placeholder="Écrire le nom du livre" name="search-book" />
            <i class="bi bi-search"></i>
        </div>
        <Link to='/cart' className="header-middle-cart">
            <i className="bi bi-cart3"></i>
        </Link>
    </div>
 
    )
}