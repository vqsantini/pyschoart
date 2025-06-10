import { Link } from 'react-router-dom'
import './Header.css'

export function Header() {
    return (
        <header>
            <div className="logo"><Link to='/'><img src="Logo.svg" /></Link></div>
            <div className="search"><img src="Search.svg" /><input type="text" className='input-search poppins' placeholder='Search items and collection' /></div>
            <nav className='header-nav fade-in'>
                <Link to='/'><button className='button-press button-default poppins'>Collections</button></Link>
                <Link to='/'><button className='button-press button-default poppins'>Feature</button></Link>
                <Link to='/'><button className='button-press button-default poppins'>FAQ</button></Link>
                <Link to='/'><button className='button-press button-default purple poppins'>Select Wallet</button></Link>
            </nav>
        </header>
    )
}