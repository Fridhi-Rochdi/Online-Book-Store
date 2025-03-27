import './Header.css';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import Navbar from './Navbar'
import React  from 'react'
export default function Header() {
    const [showmenu,setShowmenu]=React.useState(false);
    
    return (
        <header className="header">
           <HeaderTop showmenu={showmenu} setShowmenu={setShowmenu}/>
           <HeaderMiddle />
           <Navbar showmenu={showmenu} setShowmenu={setShowmenu} />
        </header>
    );
}
